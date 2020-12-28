import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Speedruns from '../containers/speedruns'

export default function Pages() {
  return (
    <Fragment>
      <Router>
        <Route path="/" component={Speedruns}/>
      </Router>
    </Fragment>
  );
}
