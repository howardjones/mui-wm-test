import React from 'react'
import TabContainer from '../TabContainer'

import { Typography } from '@material-ui/core'

export default () => (
  <TabContainer>
    <Typography variant="h3">Maps</Typography>
    <p>
      I'm the Map view! I'll contain the thumbnails for the maps, and also a
      group tab bar, if there are multiple groups.
    </p>
  </TabContainer>
);
