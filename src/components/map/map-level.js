import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import MapRoom from "./map-room";

class MapLevel extends Component {
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
      <div className="map-level">
        <h3>Level {this.props.floor}</h3>
        <table className="map-level-table">
          <tbody>
            {this.props.level.map((row = [], rowIndex) => (
              <tr key={rowIndex} className="map-level-table-row">
                {row.map((column, colIndex) => (
                  <Fragment key={colIndex}>
                    <td>
                      {column === "*" ? (
                        <MapRoom placeholder />
                      ) : (
                        <MapRoom {...column} />
                      )}
                    </td>
                  </Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  static propTypes = {
    floor: PropTypes.number,
    level: PropTypes.array,
  };

  static defaultProps = {
    level: [[]],
  };
}

export default MapLevel;
