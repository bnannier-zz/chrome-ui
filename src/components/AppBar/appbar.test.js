import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { AppBar, Container } from "../";

describe("AppBar Tests", () => {
  it("Fixed Position", function() {
    const wrapper = shallow(
      <div>
        <AppBar fixed>Chrome UI</AppBar>
        <Container>Bobby</Container>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Dense Position", function() {
    const wrapper = shallow(
      <div>
        <AppBar dense>Chrome UI</AppBar>
        <Container>Bobby</Container>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Prominent Position", function() {
    const wrapper = shallow(
      <div>
        <AppBar prominent>Chrome UI</AppBar>
        <Container>Bobby</Container>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Short Position", function() {
    const wrapper = shallow(
      <div>
        <AppBar short>Chrome UI</AppBar>
        <Container>Bobby</Container>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Short Collapsed Position", function() {
    const wrapper = shallow(
      <div>
        <AppBar shortCollapsed>Chrome UI</AppBar>
        <Container>Bobby</Container>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
