import { useQuery } from '@apollo/client';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import prettyMilliseconds from 'pretty-ms';
import GET_SPEEDRUNS_OF_TYPE from 'queries/getSpeedrunsOfTypeQuery';
import { GetSpeedrunsOfType } from 'queries/types/GetSpeedrunsOfType';
import React from 'react';
import TimeAgo from 'react-timeago';
import Loading from '../components/loading';
import ProfileLink from '../components/profile-link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type LeaderboardProps = {
  type: string
}

const LeaderboardRuns: React.FC<LeaderboardProps> = (props: LeaderboardProps) => {
  const classes = useStyles();
  const {
    data,
    loading,
    error
  } = useQuery<
    GetSpeedrunsOfType
  >(GET_SPEEDRUNS_OF_TYPE,
    { variables: { speedrunsOfTypeType: props.type } }
  );

  if (loading) return <Loading />
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;
  if (data.speedrunsOfType.length === 0) return <p>No entries</p>;

  return (
    <Container>
      { data.speedrunsOfType.length > 0 ?
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography>Rank</Typography></TableCell>
              <TableCell><Typography>User</Typography></TableCell>
              <TableCell><Typography>Time</Typography></TableCell>
              <TableCell><Typography>Date</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.speedrunsOfType.map((speedrun, i) => (
              <TableRow key={speedrun?.id}>
                <TableCell><Typography>{i}</Typography></TableCell>
                { speedrun?.submitter && <TableCell>
                  <ProfileLink id={speedrun?.submitter.id} name={speedrun?.submitter.name} />
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
}

export default LeaderboardRuns;