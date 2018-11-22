import React from 'react';
import Typography from '@material-ui/core/Typography';

function NotFound() {
  return (
    <>
      <Typography variant="h1">{'Not found'}</Typography>
      <Typography variant="h3">
        {'This is not the page you are looking for'}
      </Typography>
    </>
  );
}

export default NotFound;
