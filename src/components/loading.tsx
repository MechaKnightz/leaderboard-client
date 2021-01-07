import React from 'react';
import ReactLoading from 'react-loading';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    margin: "auto"
  },
}));

interface LoadingProps {
  color?: string
  size?: string
}

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const classes = useStyles();
  const theme = useTheme();

  let color = theme.palette.primary.main;
  if (props.color)
    color = props.color;
  let size = '10%';
  if (props.size)
    size = props.size;

  return (<ReactLoading className={classes.loader} type={"spin"} color={color} height={size} width={size} />);
}

export default Loading;