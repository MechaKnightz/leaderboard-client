import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './login-button'
import LogoutButton from './logout-button'

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

    isAuthenticated ? 
      <div>
        <LogoutButton></LogoutButton>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
            "No user metadata defined"
          )}
      </div>
    :
      <LoginButton></LoginButton>
  );
};

export default Profile;