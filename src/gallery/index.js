import React, { Component } from "react";
import {
  AppBar,
  AppBarSection,
  Button,
  Card,
  Dropdown,
  FixedAdjust,
  Language
} from "../components";

class Gallery extends Component {
  render() {
    let options = [
      {
        id: 0,
        text: "test 1"
      },
      {
        id: 1,
        text: "test 2"
      },
      {
        id: 2,
        text: "test 3"
      },
      {
        id: 3,
        text: "test 4"
      }
    ];

    return [
      <AppBar fixed key="header">
        <AppBarSection left>
          <Button icon>menu</Button>
          <span className="mdc-top-app-bar__title">Chrome UI</span>
        </AppBarSection>
        <AppBarSection right>
          <Language />
        </AppBarSection>
      </AppBar>,
      <FixedAdjust fixed key="container">
        <Button>click me</Button>
        <Card>card</Card>
        <Dropdown options={options} />
        <h1 className="mdc-typography--headline1">Big header</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </FixedAdjust>
    ];
  }
}

export default Gallery;
