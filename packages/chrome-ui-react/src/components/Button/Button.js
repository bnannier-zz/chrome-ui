import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/button.css'

class Button extends Component {
    render() {
        return (
            <button id={this.props.id} className={this.buttonType() + this.secondaryButtonType()}
                    onClick={this.props.onClick}>{this.props.children}</button>
        );
    }

    buttonType() {
        if (this.props.primary) {
            return (" primary-button ");
        } else if (this.props.secondary) {
            return (" secondary-button ");
        } else if (this.props.image) {
            return (" image-button ");
        } else {
            return (" "); // Default Button
        }
    }

    secondaryButtonType() {
        if (this.props.create) {
            return (" secondary-button-cerate ");
        } else if (this.props.success) {
            return (" secondary-button-success ");
        } else if (this.props.error) {
            return (" secondary-button-error ");
        } else if (this.props.info) {
            return (" secondary-button-info ");
        }
    }
}

Button.propTypes = {
    primary: PropTypes.bool, //bl
    secondary: PropTypes.bool,
    create: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    info: PropTypes.bool,
    children: PropTypes.node
}

export default Button;