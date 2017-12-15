import React, { Component } from 'react'
import { AppBar, AppBarLeft, AppBarRight, Container, Image, SideBarMenu } from './components'
import './assets/css/main.css'

class App extends Component {
    render() {
        return (
            <Container id="mainContainer" main>
                <AppBar id="chromeuiNav">
                    <AppBarLeft>
                        Chrome
                    </AppBarLeft>
                    <AppBarRight>
                        <SideBarMenu/>
                    </AppBarRight>
                </AppBar>
            </Container>
        );
    }
}

export default App;
