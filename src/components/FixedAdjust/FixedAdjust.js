import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./fixed-adjust.css";

/**
 * @description FixedAdjust is a container for the fixed adjustment for the AppBar.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node}   children - Child component to be encapsulated by this component.
 * @param {bool}   fixed          - Style the top app bar as a fixed top app bar.
 * @param {bool}   dense          - Style the top app bar as a dense top app bar.
 * @param {bool}   prominent      - Style the top app bar as a prominent top app bar.
 * @param {bool}   short          - Style the top app bar as a short top app bar.
 * @param {bool}   shortCollapsed - Used to indicate the short top app bar is collapsed.
 */
class FixedAdjust extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div className={this.defaultCSS()}>{this.props.children}</div>
      </Base>
    );
  }

  defaultCSS() {
    return [
      {
        "mdc-top-app-bar--fixed-adjust": this.props.fixed,
        "mdc-top-app-bar--dense-fixed-adjust": this.props.dense,
        "mdc-top-app-bar--prominent-fixed-adjust": this.props.prominent,
        "mdc-top-app-bar--short-fixed-adjust":
          this.props.short || this.props.shortCollapsed
      }
    ];
  }
}

FixedAdjust.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  dense: PropTypes.bool,
  prominent: PropTypes.bool,
  short: PropTypes.bool,
  shortCollapsed: PropTypes.bool
};

export default FixedAdjust;
