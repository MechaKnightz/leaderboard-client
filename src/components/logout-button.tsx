import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from '@material-ui/core/MenuItem';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
  );
};

export default LogoutButton;