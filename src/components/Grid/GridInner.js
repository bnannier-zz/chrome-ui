import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./grid.css";

/**
 * @description Grid inner of the Material UI Grid system.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 */
class GridInner extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div className={this.defaultCSS()}>{this.props.children}</div>
      </Base>
    );
  }

  defaultCSS() {
    return ["mdc-layout-grid__inner"];
  }
}

GridInner.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default GridInner;
