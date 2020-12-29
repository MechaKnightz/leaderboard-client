import React, { Fragment } from 'react';
import { InMemoryCache } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  LeaderboardRuns  from '../containers/leaderboard'

interface __type {
  enumValues: SpeedrunType[];
}

interface SpeedrunType {
  name: string;
}

interface SpeedrunTypes {
  __type: __type;
}

export const GET_SPEEDRUN_TYPES = gql`
  query GetSpeedrunTypes {
    __type(name: "SpeedrunType") {
    enumValues {
      name
    }
  }
}
`;

interface LeaderboardPageProps extends RouteComponentProps { }

const LeaderboardPage: React.FC<LeaderboardPageProps> = (props) => {
  const {
    data,
    loading,
    error,
    fetchMore
  } = useQuery<
    SpeedrunTypes
  >(GET_SPEEDRUN_TYPES);
  return (
    <div>
      <h3>Speedruns</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
          <React.Fragment>
            <Nav variant="tabs" defaultActiveKey="/home">
              {data && data.__type.enumValues.map(speedrunType => (
                <Nav.Item key={speedrunType.name}>
                  <Link to={"/leaderboard/" + speedrunType.name} className='nav-link'>{speedrunType.name}</Link>
                </Nav.Item>
              ))}
            </Nav>
            <Route path="/leaderboard/:type" component={LeaderboardRuns} />
          </React.Fragment>
        )}
    </div>
        );
}

export default LeaderboardPage;