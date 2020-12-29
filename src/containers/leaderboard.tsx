import React, { Fragment } from 'react';
import { InMemoryCache } from '@apollo/client';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

interface Speedrun {
  id: number;
  time: number;
  date: Date;
  description: string;
  url: string;
}

interface SpeedrunData {
  speedrunsOfType: Speedrun[];
}

export const GET_SPEEDRUNS_OF_TYPE = gql`
  query Query($speedrunsOfTypeType: SpeedrunType!) {
    speedrunsOfType(type: $speedrunsOfTypeType) {
      url
      description
      type
      date
      time
      id
    }
  }
`;

interface LeaderboardProps extends RouteComponentProps {
  type: string
}

const LeaderboardRuns: React.FC<LeaderboardProps> = (props: LeaderboardProps) => {
  const { type } = useParams<Record<string, string | undefined>>();
  const {
    data,
    loading,
    error,
    fetchMore
  } = useQuery<
    SpeedrunData
  >(GET_SPEEDRUNS_OF_TYPE,
    { variables: { speedrunsOfTypeType: type } }
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  console.log(data);

  return (
    <div>
      { data.speedrunsOfType.length > 0 ?
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.speedrunsOfType.map(speedrun => (
              <tr key={speedrun.id}>
                <td>{speedrun.id}</td>
                <td>{speedrun.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        :
        <p>No data available</p>
      }
    </div>
  );
}

export default LeaderboardRuns;