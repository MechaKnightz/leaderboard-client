import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { useParams } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(3),
  },
}));

interface ProfileInfoProps {
  name: string | undefined,
  description: string | undefined,
  avatar: string |  undefined
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Avatar alt={props.name!} src={props.avatar} className={classes.large} />
      <Typography>{props.description!}</Typography>
    </Container>
  );
}

export default ProfileInfo;