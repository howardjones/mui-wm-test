import React, { Fragment } from 'react'

import { List, ListItem, ListItemText, Typography } from '@material-ui/core'

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
    <p>Side bar has a list of all objects, even invisible ones.</p>
  </Fragment>
);
