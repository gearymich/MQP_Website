import React from 'react';

import {Button, Switch, CssBaseline, Typography, AppBar, Card, CardActions, CardMedia, Grid, Toolbar, Container } from '@mui/material';

function Home() {
  return (
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone! This is a photo album and I'm trying to make this line long to see what will happen to the
            layout on different screen sizes.
          </Typography>
        </Container>
      </div>
    </main>
  );
}

export default Home;
