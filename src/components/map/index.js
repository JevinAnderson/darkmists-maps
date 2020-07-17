import React, { Component } from "react";
import { render } from "react-dom";

import MapComponent from "./map";

class MapApp extends Component {
  state = { open: false, renderMap: false };

  toggleMap = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
      renderMap: true,
    }));
  };

  render = () => (
    <div className="map-application">
      <div
        className="map-container"
        style={{ display: this.state.open ? undefined : "none" }}
      >
        {this.state.renderMap && <MapComponent map={this.props.map} />}
      </div>
      <div className="map-controls">
        <button onClick={this.toggleMap}>
          {this.state.open ? "Close Map" : "Open Map"}
        </button>
      </div>
    </div>
  );
}

export function renderMap(node) {
  render(<MapApp map={window._map} />, node);
}
