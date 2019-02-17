import React, { Fragment } from 'react'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import EditSidePanel from './EditSidePanel'
import EditMapView from './EditMapView'
import EditActionBar from './EditActionBar'

export default () => (
  <Fragment>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="subtitle2">Editing map XXXX</Typography>
        <Button variant="outlined">Grid Snap</Button>
        <Button variant="outlined">Overlay</Button>
      </Toolbar>
    </AppBar>

    <Grid container spacing={8}>
      <Grid item xs={3}>
        <EditSidePanel/>
      </Grid>
      <Grid container item xs={9}>
        <EditActionBar/>
        <EditMapView/>
      </Grid>
    </Grid>
  </Fragment>
);
