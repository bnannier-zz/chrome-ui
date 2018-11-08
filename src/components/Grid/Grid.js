import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./grid.css";
import GridInner from "./GridInner";

/**
 * @description Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 * @param {bool} left - Left align grid.
 * @param {bool} right - Right align grid.
 * @param {bool} fixed - Set grid to fixed width.
 */
class Grid extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div className={this.defaultCSS()}>
          <GridInner>{this.props.children}</GridInner>
        </div>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-layout-grid",
      {
        "mdc-layout-grid--align-left": this.props.left,
        "mdc-layout-grid--align-right": this.props.right,
        "mdc-layout-grid--fixed-column-width grid-max-width": this.props.fixed
      }
    ];
  }
}

Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.bool,
  right: PropTypes.bool,
  fixed: PropTypes.bool
};

export default Grid;
