import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeLanguage, loadLanguage } from "./Actions";
import enWhite from "./en/white.svg";
import enBlack from "./en/black.svg";
import frWhite from "./fr/white.svg";
import frBlack from "./fr/black.svg";

/**
 * @description Language allows a user to select a specific language.
 * @param {string} id - The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
 * @param {string} className - CSS class that will be overriding this components style.
 * @param {node} children - Child component to be encapsulated by this component.
 */
class Language extends Component {
  constructor(props) {
    super(props);
    this.props.loadLanguage();
  }

  render() {
    const frIcon = this.props.homePage ? frWhite : frBlack;
    const enIcon = this.props.homePage ? enWhite : enBlack;
    const langIcon = this.props.selected === "fr" ? enIcon : frIcon;
    const requestedLang = this.props.selected === "fr" ? "en" : "fr";

    return (
      <img
        style={this.props.style}
        src={langIcon}
        alt={`selected language is ${this.props.selected}`}
        onClick={() => this.props.changeLanguage(requestedLang)}
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
    changeLanguage: value => dispatch(changeLanguage(value)),
    loadLanguage: () => dispatch(loadLanguage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);
