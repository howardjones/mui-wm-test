import React, { Component, Fragment } from "react";

import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import EditSidePanel from "./EditSidePanel";
import EditMapView from "./EditMapView";
import EditActionBar from "./EditActionBar";

import TabContainer from "../TabContainer";

export default () => (
  <Fragment>
    <AppBar position="static" color="secondary">
      <TabContainer>
        <Typography variant="subtitle2">Editing map XXXX</Typography>
      </TabContainer>
    </AppBar>
    <Grid container spacing={8}>
      <Grid item xs={3}>
        <EditSidePanel />
      </Grid>
      <Grid container xs={9}>
        <EditActionBar />
        <EditMapView />
      </Grid>
    </Grid>
  </Fragment>
);
