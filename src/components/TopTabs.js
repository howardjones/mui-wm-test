import React from "react";
import { AppBar, Paper, Typography, Tabs, Tab } from "@material-ui/core";

export default ({ currentview = "maps", onSelect }) => {
  const tabs = ["maps", "manage"];
  let current = tabs.findIndex(t => t === currentview);
  current = current > 0 ? current : false;

  return (
    <AppBar position="static">
      <Tabs
        value={current}
        onChange={(e, i) => {
          onSelect(tabs[i]);
        }}
      >
        {tabs.map((t, i) => (
          <Tab key={i} label={t} />
        ))}
      </Tabs>
    </AppBar>
  );
};
