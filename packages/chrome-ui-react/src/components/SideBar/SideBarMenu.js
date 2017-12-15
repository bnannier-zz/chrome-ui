import React, { Component } from 'react'
import { Button, Image } from '../'
import '../../assets/css/side-bar.css'

class SideBarMenu extends Component {
    constructor(props) {
        super(props);
        this.handleOpenClick = () => this.openClick();
        this.handleCloseClick = () => this.closeClick();
        this.state = {sidebarOpen: false};
    }

    render() {
        const sidebarOpen = this.state.sidebarOpen;
        if (sidebarOpen) {
            return (
                <Button image onClick={this.handleCloseClick}>
                    Close
                </Button>
            );
        } else {
            return (
                <Button image onClick={this.handleOpenClick}>
                    Open
                </Button>
            );
        }
    }

    openClick() {
        this.setState({sidebarOpen: true});
        document.getElementById("sidebarNav").classList.remove('sidebar-nav-close');
        document.getElementById("sidebarNav").classList.add('sidebar-nav-open');
        document.getElementById("mainContainer").classList.remove('close');
        document.getElementById("mainContainer").classList.add('open');
    }

    closeClick() {
        this.setState({sidebarOpen: false});
        document.getElementById("sidebarNav").classList.remove('sidebar-nav-open');
        document.getElementById("sidebarNav").classList.add('sidebar-nav-close');
        document.getElementById("mainContainer").classList.remove('open');
        document.getElementById("mainContainer").classList.add('close');
    }
}

export default SideBarMenu;