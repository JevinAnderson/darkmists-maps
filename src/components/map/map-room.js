import React, { Component } from "react";
import PropTypes from "prop-types";

import './map-room.scss'
class MapRoom extends Component {
  state = {};

  // constructor(props) {}
  // componentWillMount(){} // will be deprecated
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {} // will be deprecated
  // static getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {} // will be deprecated
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  // componentWillUnmount() {}
  // componentDidCatch(error, info) {}

  render() {
    if (this.props.placeholder) {
      return <div className="map-room" />;
    }
    return (
      <div className="map-room" id={this.props.vnum}>
        <h4 className="map-room-title">{this.props.title}</h4>
        <p className="map-room-vnum">VNUM: {this.props.vnum}</p>
        <p className="map-room-exit-header">Exits: </p>
        <p className="map-room-exits">
          {Object.keys(this.props.exits).map((key) => (
            <a
              key={key}
              href={`/${this.props.exits[key]}.html`}
              className="map-room-exit"
              style={{ display: "inline", paddingRight: "0.25rem" }}
            >
              {key}
            </a>
          ))}
        </p>
      </div>
    );
  }

  static propTypes = {
    vnum: PropTypes.string,
    title: PropTypes.string,
    exits: PropTypes.object,
  };

  static defaultProps = {
    exits: {},
  };
}

export default MapRoom;
