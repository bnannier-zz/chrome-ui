import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Dropdown } from "../";
import { changeLanguage, loadLanguage } from "./Actions";

/**
 * @description Language allows a user to select a specific language.
 * @param {string} id        - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node}   children  - Child component to be encapsulated by this component.
 */
class Language extends Component {
  constructor(props) {
    super(props);
    this.props.loadLanguage();
  }

  render() {
    return (
      <Dropdown
        id="languagePicker"
        name="language"
        onChange={this.props.changeLanguage}
        options={this.props.options}
        value={this.props.selected}
      />
    );
  }
}

Language.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const mapStateToProps = state => {
  return {
    selected: state.chrome.language.selected,
    options: state.chrome.language.options
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    changeLanguage: event => dispatch(changeLanguage(event.target.value)),
    loadLanguage: () => dispatch(loadLanguage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);
