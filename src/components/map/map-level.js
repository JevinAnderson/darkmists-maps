import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import "./map-level.scss";
import MapRoom from "./map-room";

function renderColumn(column) {
  if (column === "*") {
    return <MapRoom placeholder />;
  }

  if (Array.isArray(column)) {
    return column.map((element, index) => <MapRoom key={index} {...element} />);
  }

  return <MapRoom {...column} />;
}

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
                  <td className="map-level-table-column" key={colIndex}>
                    {renderColumn(column)}
                  </td>
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
