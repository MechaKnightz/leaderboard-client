import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import ProfileTab from './profile-tab'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Loading from '../components/loading'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 0,
    margin: '1em auto',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    maxWidth: "65%",
  }
}));

export default function PageContainer(props: any) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/leaderboard" color="inherit">
              Leaderboard
            </Link>
          </Typography>
          <ProfileTab></ProfileTab>
        </Toolbar>
      </AppBar>
      <Paper className={classes.container}>{props.children}</Paper>
    </React.Fragment>
  );
}
