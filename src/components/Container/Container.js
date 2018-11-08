import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./container.css";

/**
 * @description Container is the fixed adjustment for the AppBar.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 */
class Container extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div id="main-container">{this.props.children}</div>
      </Base>
    );
  }
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Container;
