import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <h2>Map Component coming soon...</h2>
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
