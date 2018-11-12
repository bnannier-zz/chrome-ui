import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @description Dropdown component - renders a dropdown selector with a label
 * @param {array}  options  - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} id       - CSS class that will be overriding this components style.
 * @param {func}   onChange - Child component to be encapsulated by this component.
 * @param {string} name     - Left align grid.
 * @param {string} label    - Right align grid.
 */
class Dropdown extends Component {
  render() {
    return (
      <div className="form--input">
        <label className="label" htmlFor={this.props.id}>
          {" "}
          {this.props.label}{" "}
        </label>
        <select
          className="input--select"
          id={this.props.id}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        >
          {this.renderOptions(this.props.options)}
        </select>
      </div>
    );
  }

  /**
   * @description renders a list of options to be nested in the <select> element
   * @param options {array} list of options to be rendered
   */
  renderOptions(options) {
    return options.map(option => {
      return (
        <option value={option.id} key={option.id}>
          {" "}
          {option.text}{" "}
        </option>
      );
    });
  }
}

Dropdown.propTypes = {
  options: PropTypes.array,
  id: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string
};

export default Dropdown;
