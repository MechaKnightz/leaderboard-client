import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

interface ProfileLinkProps {
  id: string;
  name: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = (props: ProfileLinkProps) => {
  return (
    <Typography>
      <Link href={`/profile/${props.id}`} color="inherit">
        {props.name}
      </Link>
    </Typography>
  );
}

export default ProfileLink;