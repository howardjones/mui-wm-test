import React from "react";
import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";

export default props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};
