import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import TopTabs from "./TopTabs";
import MapView from "./MapView";
import ManageView from "./ManageView";
import WelcomeView from "./WelcomeView";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

class App extends Component {
  state = {
    view: "manage"
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
      </Fragment>
    );
  }
}

export default App;
