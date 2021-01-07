import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import prettyMilliseconds from 'pretty-ms';
import { UserAndSubmittedRunsById_userById_submittedRuns } from 'queries/types/UserAndSubmittedRunsById';
import React from "react";
import TimeAgo from 'react-timeago';
import ProfileLink from '../components/profile-link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


interface ProfileTableProps {
  data: (UserAndSubmittedRunsById_userById_submittedRuns | null) [];
  showVerifier?: boolean
}

const ProfileTable: React.FC<ProfileTableProps> = (props: ProfileTableProps) => {
  const classes = useStyles();

  return (
    <Container>
      {
        props.data.length > 0 ?
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
              {props.showVerifier == true && <TableCell><Typography>Verifier</Typography></TableCell> }
                <TableCell><Typography>Time</Typography></TableCell>
                <TableCell><Typography>Date</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props?.data.map((speedrun, i) => (
                <TableRow key={speedrun?.id}>
                  { speedrun?.verifier && <TableCell>
                    <ProfileLink id={speedrun?.verifier.id} name={speedrun?.verifier.name} />
                  </TableCell>}
                  { speedrun?.time && <TableCell><Typography>{prettyMilliseconds(speedrun.time, { keepDecimalsOnWholeSeconds: true })}</Typography></TableCell>}
                  { speedrun?.date && <TableCell><Typography><TimeAgo date={speedrun.date} /></Typography></TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          :
          <Typography>No data available</Typography>
      }
    </Container>
  );
};

export default ProfileTable;