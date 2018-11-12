import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base } from "../";
import "./appbar.css";
import { MDCTopAppBar } from "@material/top-app-bar/dist/mdc.topAppBar";

import AppBarRow from "../AppBar/AppBarRow";

/**
 * @description AppBar acts as a container for items such as application title, navigation icon, and action items.
 * @param {string} id             - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className      - CSS class that will be overriding this components style.
 * @param {node}   children       - Child component to be encapsulated by this component.
 * @param {bool}   fixed          - Style the top app bar as a fixed top app bar.
 * @param {bool}   dense          - Style the top app bar as a dense top app bar.
 * @param {bool}   prominent      - Style the top app bar as a prominent top app bar.
 * @param {bool}   short          - Style the top app bar as a short top app bar.
 * @param {bool}   shortCollapsed - Used to indicate the short top app bar is collapsed.
 * @param {bool}   hasActionItems - Top app bars can contain action items which are placed on the side opposite the navigation icon.
 */
class AppBar extends Component {
  constructor(props) {
    super(props);
    this.appBarRef = React.createRef();
  }

  render() {
    return (
      <Base {...this.props}>
        <header className={this.defaultCSS()} ref={this.appBarRef}>
          <AppBarRow>{this.props.children}</AppBarRow>
        </header>
      </Base>
    );
  }

  defaultCSS() {
    return [
      "mdc-top-app-bar",
      {
        "mdc-top-app-bar--fixed": this.props.fixed,
        "mdc-top-app-bar--dense": this.props.dense,
        "mdc-top-app-bar--prominent": this.props.prominent,
        "mdc-top-app-bar--short": this.props.short || this.props.shortCollapsed,
        "mdc-top-app-bar--short-collapsed": this.props.shortCollapsed,
        "mdc-top-app-bar--short-has-action-item":
          this.props.hasActionItems &&
          (this.props.short || this.props.shortCollapsed)
      }
    ];
  }

  containerCSS() {
    if (this.props.dense) {
      document
        .getElementById("main-container")
        .classList.add("mdc-top-app-bar--dense-fixed-adjust");
    } else if (this.props.prominent) {
      document
        .getElementById("main-container")
        .classList.add("mdc-top-app-bar--prominent-fixed-adjust");
    } else if (this.props.short || this.props.shortCollapsed) {
      document
        .getElementById("main-container")
        .classList.add("mdc-top-app-bar--short-fixed-adjust");
    } else {
      document
        .getElementById("main-container")
        .classList.add("mdc-top-app-bar--fixed-adjust");
    }
  }

  componentDidMount() {
    const topAppBar = new MDCTopAppBar(this.appBarRef.current);
    topAppBar.initialize();
    this.containerCSS();
  }
}

AppBar.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  dense: PropTypes.bool,
  prominent: PropTypes.bool,
  short: PropTypes.bool,
  shortCollapsed: PropTypes.bool,
  hasActionItems: PropTypes.bool
};

export default AppBar;
