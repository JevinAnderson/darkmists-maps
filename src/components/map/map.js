import React, { Component } from "react";
import PropTypes from "prop-types";

import MapLevel from "./map-level";

class MapComponent extends Component {
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
    return (
      <div className="map-component">
        <h2>{this.props.map.name} - Map</h2>
        {this.props.map.map.map((level, index) => (
          <MapLevel
            key={index}
            level={level}
            floor={this.props.map.map.length - index}
          />
        ))}
      </div>
    );
  }

  static propTypes = {
    map: PropTypes.shape({
      filename: PropTypes.string,
      map: PropTypes.array,
      name: PropTypes.string,
    }),
  };

  static defaultProps = {};
}

export default MapComponent;
