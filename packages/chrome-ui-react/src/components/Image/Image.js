import React, { Component } from 'react';
import '../../assets/css/image.css'

class Image extends Component {
    render() {
        return (
            <img id={this.props.id} src={this.props.src} alt={this.props.alt} className={this.props.className}/>
        );
    }
}

export default Image;