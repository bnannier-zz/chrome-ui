import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Card } from "../";

describe("Card Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<Card>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Outlined", function() {
    const wrapper = shallow(<Card outlined>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Primary Action", function() {
    const wrapper = shallow(<Card primaryAction>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Media", function() {
    const wrapper = shallow(<Card media>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Media Square", function() {
    const wrapper = shallow(<Card mediaSquare>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Media 169", function() {
    const wrapper = shallow(<Card media169>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Media Content", function() {
    const wrapper = shallow(<Card mediaContent>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Actions", function() {
    const wrapper = shallow(<Card actions>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Actions Full Bleed", function() {
    const wrapper = shallow(<Card actionsFullBleed>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Action Buttons", function() {
    const wrapper = shallow(<Card actionButtons>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Action Icons", function() {
    const wrapper = shallow(<Card actionIcons>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Action", function() {
    const wrapper = shallow(<Card action>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Action Button", function() {
    const wrapper = shallow(<Card actionButton>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Action Icon", function() {
    const wrapper = shallow(<Card actionIcon>test</Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
