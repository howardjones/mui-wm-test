import React from "react";
import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";
import TabContainer from "./TabContainer";

export default () => (
  <TabContainer>
    <Typography variant="display4">Welcome</Typography>
    <Typography variant="display3">to Network Weathermap!</Typography>
    <Typography variant="body1">
      To get started, create a map in the <strong>Manage</strong> tab
    </Typography>
  </TabContainer>
);
