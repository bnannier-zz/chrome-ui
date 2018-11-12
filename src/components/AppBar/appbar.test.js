import React from "react";
import { configure, shallow, mount } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { AppBar, FixedAdjust } from "../";

describe("AppBar Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<AppBar>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it("Fixed", function() {
    const wrapper = shallow(<AppBar fixed>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Dense", function() {
    const wrapper = shallow(<AppBar dense>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Prominent", function() {
    const wrapper = shallow(<AppBar prominent>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Short", function() {
    const wrapper = shallow(<AppBar short>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Short Collapsed", function() {
    const wrapper = shallow(<AppBar shortCollapsed>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Has Action Items", function() {
    const wrapper = shallow(<AppBar hasActionItems>test</AppBar>);
    expect(wrapper.render().find("header").length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });
});
