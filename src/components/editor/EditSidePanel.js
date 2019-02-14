import React, { Component, Fragment } from "react";

import {
  AppBar,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemLink,
  Typography,
  Tabs,
  Tab
} from "@material-ui/core";

export default () => (
  <Fragment>
    <Typography variant="h6">Scales</Typography>
    <List>
      <ListItem>
        <ListItemText primary="updown" />
      </ListItem>
      <ListItem>
        <ListItemText primary="DEFAULT" />
      </ListItem>
    </List>
    <Typography variant="h6">Nodes</Typography>
    <List>
      <ListItem>
        <ListItemText primary="DEFAULT" />
      </ListItem>
    </List>
    <Typography variant="h6">Links</Typography>
    <List>
      <ListItem>
        <ListItemText primary="DEFAULT" />
      </ListItem>
      <ListItem>
        <ListItemText primary="l1" />
      </ListItem>
    </List>
  </Fragment>
);
