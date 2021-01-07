import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { useQuery } from '@apollo/client';
import GET_SPEEDRUN_TYPES from 'queries/speedrunTypesQuery';
import { GetSpeedrunTypes } from 'queries/types/GetSpeedrunTypes';
import React from 'react';
import LeaderboardTabPanel from '../components/leaderboard-tab-panel';
import Loading from '../components/loading';
import LeaderboardRuns from './leaderboard';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface LeaderboardPageProps { }

const LeaderboardPage: React.FC<LeaderboardPageProps> = (props) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const {
    data,
    loading
  } = useQuery<
    GetSpeedrunTypes
  >(GET_SPEEDRUN_TYPES);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  //link to change when tab changed <NavLink to={"/leaderboard/" + speedrunType.name} activeClassName="active" className='nav-link' css={theme => ({ backgroundColor: theme.color.primary })}>{speedrunType.name}</NavLink>

  return (
    <div>
      {loading ? (
        <Loading color={theme.palette.secondary.contrastText} />
      ) : (
          <React.Fragment>
            <AppBar position="static">
              <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
                {data && data.__type?.enumValues?.map((speedrunType) => (
                  <Tab key={speedrunType.name} label={speedrunType.name} {...a11yProps(0)} />
                ))}
              </Tabs>
            </AppBar>
            {data && data.__type?.enumValues?.map((speedrunType, i) => (
              <LeaderboardTabPanel value={value} index={i} key={speedrunType.name}>
                <LeaderboardRuns type={speedrunType.name} />
              </LeaderboardTabPanel>
            ))}
          </React.Fragment>
        )}
    </div>
  );
}

export default LeaderboardPage;