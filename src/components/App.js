import React, { Component, Fragment } from 'react'

import TopTabs from './TopTabs'
import MapView from './viewer/MapView'
import ManageView from './manager/ManageView'
import EditView from './editor/EditView'
import WelcomeView from './WelcomeView'

class App extends Component {
  state = {
    view: "editor"
  };

  handleTabSelect = newView => {
    this.setState({
      view: newView
    });
  };

  render() {
    return (
      <Fragment>
        <TopTabs
          currentview={this.state.view}
          onSelect={this.handleTabSelect}
        />
        {this.state.view === "welcome" ? <WelcomeView /> : null}
        {this.state.view === "maps" ? <MapView /> : null}
        {this.state.view === "manage" ? <ManageView /> : null}
        {this.state.view === "editor" ? <EditView /> : null}
      </Fragment>
    );
  }
}

export default App;
