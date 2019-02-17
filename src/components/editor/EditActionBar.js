import React from 'react'

import { AppBar, Button, Typography } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'

export default () => (
  <AppBar position="static" width={'100%'}>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{marginRight: 10}}>
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
);
