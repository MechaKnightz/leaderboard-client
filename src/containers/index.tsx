import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LeaderboardPage from './leaderboard-page'
import PageContainer from '../components/page-container'
import ProfilePage from './profile-page'
import SubmitPage from './submit-page'


export default function Pages() {
  return (
    <Fragment>
      <Router>
        <PageContainer>
          <Routes>
            <Route path={"/"} element={<Navigate to="/leaderboard"/>}/>
            <Route path={"/leaderboard"} element={<LeaderboardPage />} />
            <Route path={"/profile/:userId"} element={<ProfilePage />} />
            <Route path={"/submit"} element={<SubmitPage />} />
          </Routes>
        </PageContainer>
      </Router>
    </Fragment >
  );
}
