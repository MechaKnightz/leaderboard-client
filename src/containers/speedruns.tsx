import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

enum SpeedrunType {

}

interface Speedrun {
  id: number;
  time: number;
  date: Date;
  type: SpeedrunType;
  description: string;
  url: string;
}

interface SpeedrunData {
  speedruns: Speedrun[];
}

export const GET_SPEEDRUNS = gql`
  query GetSpeedrunList {
    speedruns {
      id
      time
      date
      url
      description
      type
  }
}
`;

interface SpeedrunsProps { }

const Speedruns: React.FC<SpeedrunsProps> = () => {
  const {
		data,
		loading,
		error,
		fetchMore
	} = useQuery<
    SpeedrunData
	>(GET_SPEEDRUNS);
  return (
    <div>
      <h3>Speedruns</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data && data.speedruns.map(speedrun => (
              <tr key={speedrun.id}>
                <td>{speedrun.id}</td>
                <td>{speedrun.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Speedruns;