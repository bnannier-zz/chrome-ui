import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @description Dropdown component - renders a dropdown selector with a label
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
  /**
   * options - array of options to be rendered in the dropdown
   */
  options: PropTypes.array,
  /**
   * id - element id of the dropdown
   */
  id: PropTypes.string,
  /**
   * onChange - function to be attached to the dropdown's onChange event
   */
  onChange: PropTypes.func,
  /**
   * name - element name of the dropdown
   */
  name: PropTypes.string,
  /**
   * label - text to be displayed in the label
   */
  label: PropTypes.string
};

export default Dropdown;
