import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/container.css'

class Container extends Component {
    render() {
        return (
            <div id={this.props.id} className={this.buttonType()}>
                {this.props.children}
            </div>
        );
    }

    buttonType() {
        if (this.props.main) {
            return (" main-container ");
        } else if (this.props.inner) {
            return (" inner-container ");
        } else {
            return (" "); // Default Button
        }
    }
}

Container.propTypes = {
    main: PropTypes.bool,
    inner: PropTypes.bool,
    children: PropTypes.node
}

export default Container;