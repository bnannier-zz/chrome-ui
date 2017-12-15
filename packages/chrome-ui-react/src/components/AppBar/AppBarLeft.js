import React, { Component } from 'react'
import '../../assets/css/app-bar.css'

class AppBarLeft extends Component {
    render() {
        return (
            <div className="app-bar-left">
                {this.props.children}
            </div>
        );
    }
}

export default AppBarLeft;