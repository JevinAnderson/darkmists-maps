import React, { Component } from "react";
import { render } from "react-dom";

import MapComponent from "./map";
import "./index.scss";

class MapApp extends Component {
  state = { open: false };

  toggleMap = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
      renderMap: true,
    }));
  };

  renderMapControls = () => (
    <div className="map-controls">
      <button className="map-display-button" onClick={this.toggleMap}>
        {this.state.open ? "Close Map" : "Open Map"}
      </button>
    </div>
  );

  render = () => (
    <div className="map-application">
      {this.renderMapControls()}
      <div
        className="map-container"
        style={{ display: this.state.open ? undefined : "none" }}
      >
        {this.state.open && <MapComponent map={this.props.map} />}
      </div>
      {this.state.open && this.renderMapControls()}
    </div>
  );
}

export function renderMap(node, map) {
  render(<MapApp map={map} />, node);
}
