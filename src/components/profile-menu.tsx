import React, { useState } from "react"
import LogoutButton from '../components/logout-button'
import styled from '@emotion/styled';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { useNavigate  } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  profileMenuTitle: {
    color: theme.palette.secondary.contrastText
  }
}));

const ProfileMenu = () => {
  const { getIdTokenClaims, user } = useAuth0();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUserId] = useState("");
  const [roles, setRoles] = useState([""]);
  const navigate = useNavigate();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${username}`);
  }

  const handleSubmitClick = () => {
    navigate(`/submit`);
  }


  getIdTokenClaims().then((res) => {
    if (res) {
      if (res.sub)
        setUserId(res.sub);
      if(res["http://example.com/roles"])
        setRoles(res["http://example.com/roles"]);
    }
  })

  return (
    <React.Fragment>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ProfileHeader className={classes.profileMenuTitle}>{user.nickname}</ProfileHeader>
        <ProfilePicture src={user.picture} alt={user.name} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleSubmitClick}>Submit run</MenuItem>
        {roles.includes("moderator") && <MenuItem onClick={() => {navigate(`/verify`);}}>Verify runs</MenuItem>}
        <Divider />
        <LogoutButton></LogoutButton>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileMenu;

const ProfilePicture = styled("img")({
  width: "2em",
  height: "2em"
});

const ProfileHeader = styled("h4")({
  marginRight: "0.5em",
});