import React from "react";
import TabContainer from "./TabContainer";

import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";

export default () => (
  <TabContainer>
    <Typography variant="h3">Maps</Typography>
    I'm the Map view! I'll contain the thumbnails for the maps, and also a group
    tab bar, if there are multiple groups.
  </TabContainer>
);
