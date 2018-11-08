import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./button.css";

/**
 * @description Buttons allow users to take actions, and make choices, with a single tap.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 * @param {bool} raised - Styles a contained button that is elevated above the surface.
 * @param {bool} unelevated - Styles a contained button that is flush with the surface.
 * @param {bool} outlined - Styles an outlined button that is flush with the surface.
 * @param {bool} dense - Makes the button text and container slightly smaller.
 * @param {bool} icon - Indicates an icon element.
 */
class Button extends Component {
  render() {
    return (
      <Base {...this.props}>
        <button className={this.defaultCSS()}>{this.props.children}</button>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-button",
      {
        "mdc-button--raised": this.props.raised,
        "mdc-button--unelevated": this.props.unelevated,
        "mdc-button--outlined": this.props.outlined,
        "mdc-button--dense": this.props.dense,
        "mdc-button__icon": this.props.icon
      }
    ];
  }
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  raised: PropTypes.bool,
  unelevated: PropTypes.bool,
  outlined: PropTypes.bool,
  dense: PropTypes.bool,
  icon: PropTypes.bool
};

export default Button;
