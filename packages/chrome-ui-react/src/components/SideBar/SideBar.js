import React, { Component } from 'react'
import '../../assets/css/side-bar.css'

class SideBar extends Component {
    render() {
        return (
            <div id={this.props.id} className="sidebar-nav">
                {this.props.children}
            </div>
        );
    }
}

export default SideBar;