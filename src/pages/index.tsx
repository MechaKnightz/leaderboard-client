import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LeaderboardPage from './leaderboard-page'
import PageContainer from '../components/page-container'

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router>
          <Route path={["/leaderboard", "/"]} component={LeaderboardPage} />
        </Router>
      </PageContainer>
    </Fragment >
  );
}
