import React, { Component } from 'react'
import '../../assets/css/app-bar.css'

class AppBarRight extends Component {
    render() {
        return (
            <div className="app-bar-right">
                {this.props.children}
            </div>
        );
    }
}

export default AppBarRight;