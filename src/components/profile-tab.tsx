import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from './profile-menu'
import LoginButton from './login-button'
import Loading from '../components/loading'
import { useTheme } from '@material-ui/core/styles';

const ProfileTab = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  const theme = useTheme();

  if (isLoading) {
    return <Loading color={theme.palette.secondary.contrastText} size="2em" />
  }

  return (

    isAuthenticated ?
      <ProfileMenu />
      :
      <LoginButton/>
  );
};

export default ProfileTab;