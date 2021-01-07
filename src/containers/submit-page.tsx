import '@date-io/moment'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import GET_SPEEDRUN_TYPES from 'queries/speedrunTypesQuery';
import { GetSpeedrunTypes } from 'queries/types/GetSpeedrunTypes';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { useAuth0 } from "@auth0/auth0-react";
import SUBMIT_SPEEDRUN from 'queries/submitSpeedrunMutation';
import { SubmitSpeedrun } from 'queries/types/SubmitSpeedrun'
import MaskedInput from 'react-text-mask';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch'
    },
  },
  inputContainer: {
    margin: theme.spacing(2),
  },
  multiline: {
    width: "100%",
    height: "100%"
  },
  submitButton: {
    margin: theme.spacing(2),
    width: '27ch'
  }
}));

interface TextMaskProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMask(props: TextMaskProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, "h", /\d/, /\d/, 'm', /\d/, /\d/, "s", /\d/, /\d/, /\d/, "ms"]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

interface SubmitPageProps { }

const SubmitPage: React.FC<SubmitPageProps> = (props) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [time, setTime] = React.useState(0);
  const { isAuthenticated } = useAuth0();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    let hours: number = +event.target.value.substring(-1, 2);
    let minutes: number = +event.target.value.substring(3, 5);
    let seconds: number = +event.target.value.substring(6, 8);
    let milliseconds: number = +event.target.value.substring(9, 12);

    let totalMilliseconds = milliseconds + seconds * 1000 + minutes * 1000 * 60 + hours * 1000 * 60 * 60;
    setTime(totalMilliseconds);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const [submitSpeedrun, returnData] = useMutation<
    SubmitSpeedrun
  >
    (
      SUBMIT_SPEEDRUN,
      {
        variables: {
          submitSpeedrunData: {
            date: selectedDate,
            time: time,
            description: description,
            url: url,
            type: type
          }
        },
      }
    );

  let submitData = returnData.data;
  let submitError = returnData.error;

  const submit = () => {
    console.log({
      submitSpeedrunData: {
        date: selectedDate,
        time: time,
        description: description,
        url: url,
        type: type
      }
    });
    return;
    submitSpeedrun();
  }

  const {
    data,
    loading
  } = useQuery<
    GetSpeedrunTypes
  >(GET_SPEEDRUN_TYPES);

  if (!isAuthenticated)
    return <Typography>Not logged in</Typography>;

  return (
    <FormControl className={classes.root}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          className={classes.inputContainer}
        >
          <TextField
            select
            label="Type of run"
            value={type}
            onChange={handleChange}
          >
            {data && data.__type?.enumValues?.map((speedrunType) => (
              <MenuItem key={speedrunType.name} value={speedrunType.name}>
                {speedrunType.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Video URL" onChange={(text) => setUrl(text.target.value)} />
          <TextField
            label="Time"
            onChange={handleChange}
            InputProps={{
              inputComponent: TextMask as any,
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="DD/MM/yyyy"
            margin="normal"
            label="Date performed"
            value={selectedDate}
            onChange={(text: any) => { setSelectedDate(text.target.value) }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          className={classes.inputContainer}
        >
          <TextField
            onChange={(text) => setDescription(text.target.value)}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            helperText="Optional"
            className={classes.multiline}
          />
          <Button className={classes.submitButton} variant="contained" color="primary" onClick={submit} >Submit</Button>
        </Box>
      </Box>
    </FormControl>
  );
}

export default SubmitPage;