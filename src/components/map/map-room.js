import React, { Component } from "react";
import PropTypes from "prop-types";

import "./map-room.scss";
import { addLine, removeLine } from "./utils/lines";

const titleStore = {};

const Arrow = ({ direction, exits }) =>
  exits[direction] ? (
    <a
      className={`map-room-arrow-container ${direction}`}
      href={`/${exits[direction]}.html`}
    >
      <i className={`map-room-arrow ${direction}`} />
    </a>
  ) : null;

function formatTitle(title = "") {
  if (titleStore[title]) {
    return titleStore[title];
  }

  const result = title
    .toUpperCase()
    .split(" ")
    .map((word) => word.split("")[0])
    .join("");
  titleStore[title] = result;

  return result;
}
class MapRoom extends Component {
  state = {};

  componentDidMount() {
    Object.keys(this.props.exits).forEach((key) => {
      addLine(this.props.vnum, this.props.exits[key]);
    });
  }

  componentWillUnmount() {
    Object.keys(this.props.exits).forEach((key) => {
      removeLine(this.props.vnum, this.props.exits[key]);
    });
  }

  render() {
    if (this.props.placeholder) {
      return <div className="map-room map-room-placeholder" />;
    }
    return (
      <div className="map-room map-room-actual" id={this.props.vnum}>
        <h4 className="map-room-title">{formatTitle(this.props.title)}</h4>
        <div className="map-room-exits">
          <div className="map-room-cardinal-container">
            {["east", "south", "west", "north"].map((direction) => (
              <Arrow
                key={direction}
                direction={direction}
                exits={this.props.exits}
              />
            ))}
          </div>
          <div className="map-room-vertical-container">
            {["up", "down"].map((direction) => (
              <Arrow
                key={direction}
                direction={direction}
                exits={this.props.exits}
              />
            ))}
          </div>
        </div>
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
