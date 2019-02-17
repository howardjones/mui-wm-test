import React from 'react'

import { Paper } from '@material-ui/core'

export default () => (
  <Paper width="100%" height="100%">
    <div id="wm_editor_map" style={{width: '100%', overflow: 'auto'}}><img src="example-map.png"
                                                                           alt={'The map being edited'}/></div>
  </Paper>
);
