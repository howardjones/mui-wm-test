import React, { Component, Fragment } from "react";

import {
  AppBar,
  Button,
  Paper,
  Typography,
  Tabs,
  Tab
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

export default () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Node: n3455
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ marginRight: 10 }}
        >
          Move
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{ marginRight: 10 }}
        >
          Properties
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{ marginRight: 10 }}
        >
          Delete
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);
