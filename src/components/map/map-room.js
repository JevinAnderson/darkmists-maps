import React, { Component } from "react";
import PropTypes from "prop-types";

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
      return `\u00A0`;
    }
    return (
      <div className="map-room">
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
