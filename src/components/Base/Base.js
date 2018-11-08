import React, { Component } from "react";
import classNames from "classnames";
import "./base.css";

class Base extends Component {
  render() {
    return React.cloneElement(this.props.children, {
      className: this.overrideCSS()
    });
  }

  overrideCSS() {
    return classNames(
      this.props.children.props.className,
      this.props.className
    );
  }
}

export default Base;
