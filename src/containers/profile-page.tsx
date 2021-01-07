import { useQuery } from '@apollo/client';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { UserAndSubmittedRunsById } from 'queries/types/UserAndSubmittedRunsById';
import GET_SPEEDRUNS_BY_ID from 'queries/userAndSubmittedRunsByIdQuery';
import React from 'react';
import { useParams } from "react-router-dom";
import Loading from '../components/loading';
import ProfileInfo from '../components/profile-info';
import ProfileTable from '../components/profile-table';

const useStyles = makeStyles({
  tableHeader: {
    marginLeft: "1em",
    marginTop: "0.5em"
  },
  header: {
    marginLeft: "1em",
    marginTop: "0.5em",
    marginBottom: "0.5em"
  }
});

interface ProfilePageProps { }

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const classes = useStyles();
  let { userId } = useParams();

  const {
    data,
    loading,
    error
  } = useQuery<
    UserAndSubmittedRunsById
  >(GET_SPEEDRUNS_BY_ID,
    { variables: { submittedRunsByIdId: userId } });

  if (loading) return <Loading />
  if (error) {
    return <p>ERROR: {error.message}</p>; 
  }
  if (!data) return <p>Not found</p>;

  let verified = data.userById?.submittedRuns.filter(speedrun => speedrun?.verifier != null);
  let unverified = data.userById?.submittedRuns.filter(speedrun => speedrun?.verifier == null);

  return (
    <Paper>
      <ProfileInfo name={data.userById?.name} description={data.userById?.description!} avatar={data.userById?.avatar!} />
      <Typography className={classes.header} variant="h3">Speedruns</Typography>
      <Divider />
      <Container>
        <Typography className={classes.tableHeader} variant="h4">Verified</Typography>
        {verified ? <ProfileTable showVerifier={true}  data={verified} /> : <Typography>No runs found</Typography>}
      </Container>
      <Container>
        <Typography className={classes.tableHeader} variant="h4">Unverified</Typography>
        {unverified ? <ProfileTable data={unverified} /> : <Typography>No runs found</Typography>}
      </Container>
    </Paper>
  );
}

export default ProfilePage;