import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./appbar.css";

/**
 * @description AppBarSection is the divisional of the AppBar in to left and right sections.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 * @param {bool} left - Left section of the app bar.
 * @param {bool} right - Right section of the app bar.
 */
class AppBarSection extends Component {
  render() {
    return (
      <Base {...this.props}>
        <section className={this.defaultCSS()}>{this.props.children}</section>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-top-app-bar__section",
      {
        "mdc-top-app-bar__section--align-start": this.props.left,
        "mdc-top-app-bar__section--align-end": this.props.right
      }
    ];
  }
}

AppBarSection.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.bool,
  right: PropTypes.bool
};

export default AppBarSection;
