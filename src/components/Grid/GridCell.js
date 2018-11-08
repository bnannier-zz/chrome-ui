import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./grid.css";

/**
 * @description Grid cell of the Material UI Grid system.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 * @param {bool} p1 - Phone span 1 cell
 * @param {bool} p2 - Phone span 2 cell
 * @param {bool} p3 - Phone span 3 cell
 * @param {bool} p4 - Phone span 4 cell
 * @param {bool} t1 - Tablet span 1 cell
 * @param {bool} t2 - Tablet span 2 cell
 * @param {bool} t3 - Tablet span 3 cell
 * @param {bool} t4 - Tablet span 4 cell
 * @param {bool} t5 - Tablet span 5 cell
 * @param {bool} t6 - Tablet span 6 cell
 * @param {bool} t7 - Tablet span 7 cell
 * @param {bool} t8 - Tablet span 8 cell
 * @param {bool} d1 - Desktop span 1 cell
 * @param {bool} d2 - Desktop span 2 cell
 * @param {bool} d3 - Desktop span 3 cell
 * @param {bool} d4 - Desktop span 4 cell
 * @param {bool} d5 - Desktop span 5 cell
 * @param {bool} d6 - Desktop span 6 cell
 * @param {bool} d7 - Desktop span 7 cell
 * @param {bool} d8 - Desktop span 8 cell
 * @param {bool} d9 - Desktop span 9 cell
 * @param {bool} d10 - Desktop span 10 cell
 * @param {bool} d11 - Desktop span 11 cell
 * @param {bool} d12 - Desktop span 12 cell
 */
class GridCell extends Component {
  render() {
    return (
      <Base {...this.props}>
        <div className={this.defaultCSS()}>{this.props.children}</div>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-layout-grid__cell",
      {
        "mdc-layout-grid__cell--span-1-phone": this.props.p1,
        "mdc-layout-grid__cell--span-2-phone": this.props.p2,
        "mdc-layout-grid__cell--span-3-phone": this.props.p3,
        "mdc-layout-grid__cell--span-4-phone": this.props.p4,
        "mdc-layout-grid__cell--span-1-tablet": this.props.t1,
        "mdc-layout-grid__cell--span-2-tablet": this.props.t2,
        "mdc-layout-grid__cell--span-3-tablet": this.props.t3,
        "mdc-layout-grid__cell--span-4-tablet": this.props.t4,
        "mdc-layout-grid__cell--span-5-tablet": this.props.t5,
        "mdc-layout-grid__cell--span-6-tablet": this.props.t6,
        "mdc-layout-grid__cell--span-7-tablet": this.props.t7,
        "mdc-layout-grid__cell--span-8-tablet": this.props.t8,
        "mdc-layout-grid__cell--span-1-desktop": this.props.d1,
        "mdc-layout-grid__cell--span-2-desktop": this.props.d2,
        "mdc-layout-grid__cell--span-3-desktop": this.props.d3,
        "mdc-layout-grid__cell--span-4-desktop": this.props.d4,
        "mdc-layout-grid__cell--span-5-desktop": this.props.d5,
        "mdc-layout-grid__cell--span-6-desktop": this.props.d6,
        "mdc-layout-grid__cell--span-7-desktop": this.props.d7,
        "mdc-layout-grid__cell--span-8-desktop": this.props.d8,
        "mdc-layout-grid__cell--span-9-desktop": this.props.d9,
        "mdc-layout-grid__cell--span-10-desktop": this.props.d10,
        "mdc-layout-grid__cell--span-11-desktop": this.props.d11,
        "mdc-layout-grid__cell--span-12-desktop": this.props.d12
      }
    ];
  }
}

GridCell.propTypes = {
  id: PropTypes.string,
  css: PropTypes.string,
  children: PropTypes.node,
  p1: PropTypes.bool,
  p2: PropTypes.bool,
  p3: PropTypes.bool,
  p4: PropTypes.bool,
  t1: PropTypes.bool,
  t2: PropTypes.bool,
  t3: PropTypes.bool,
  t4: PropTypes.bool,
  t5: PropTypes.bool,
  t6: PropTypes.bool,
  t7: PropTypes.bool,
  t8: PropTypes.bool,
  d1: PropTypes.bool,
  d2: PropTypes.bool,
  d3: PropTypes.bool,
  d4: PropTypes.bool,
  d5: PropTypes.bool,
  d6: PropTypes.bool,
  d7: PropTypes.bool,
  d8: PropTypes.bool,
  d9: PropTypes.bool,
  d10: PropTypes.bool,
  d11: PropTypes.bool,
  d12: PropTypes.bool
};

export default GridCell;
