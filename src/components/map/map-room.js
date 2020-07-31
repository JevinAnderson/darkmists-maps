import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import "./map-room.scss";
import { addLine, getLine, removeLine } from "./utils/lines";

const titleStore = {};

const Arrow = ({ direction, exits }) =>
  exits[direction] ? (
    <a
      className={`map-room-arrow-container ${direction}`}
      href={`/${exits[direction]}.html`}
      target="__blank"
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
  lines = [];
  componentDidMount() {
    Object.keys(this.props.exits).forEach((key) => {
      addLine(this.props.vnum, this.props.exits[key]);
    });

    $(this.container).hover(this.handleIn, this.handleOut);
  }

  componentWillUnmount() {
    Object.keys(this.props.exits).forEach((key) => {
      removeLine(this.props.vnum, this.props.exits[key]);
    });

    $(this.container).off("mouseenter mouseleave");
  }

  handleIn = () => {
    Object.keys(this.props.exits).forEach((key) => {
      const line = getLine(this.props.vnum, this.props.exits[key]);
      if (!line) return;
      line.$line.attr("stroke", "#902c1b");
      line.$line.attr("stroke-width", "4px");
    });
  };

  handleOut = () => {
    Object.keys(this.props.exits).forEach((key) => {
      const line = getLine(this.props.vnum, this.props.exits[key]);
      if (!line) return;
      line.$line.attr("stroke", "orange");
      line.$line.attr("stroke-width", "2px");
    });
  };

  containerRefHandler = (container) => {
    this.container = container;
  };

  render() {
    if (this.props.placeholder) {
      return <div className="map-room map-room-placeholder" />;
    }
    return (
      <div
        className="map-room map-room-actual"
        id={this.props.vnum}
        data-tip
        data-for={`tt${this.props.vnum}`}
        ref={this.containerRefHandler}
      >
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
        <ReactTooltip id={`tt${this.props.vnum}`} aria-haspopup="true">
          <p>{this.props.title}</p>
        </ReactTooltip>
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
