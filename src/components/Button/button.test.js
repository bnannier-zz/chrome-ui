import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Button } from "../";

describe("Button Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<Button>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Raised", function() {
    const wrapper = shallow(<Button raised>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Unelevated", function() {
    const wrapper = shallow(<Button unelevated>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Outlined", function() {
    const wrapper = shallow(<Button outlined>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Dense", function() {
    const wrapper = shallow(<Button dense>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("Icon", function() {
    const wrapper = shallow(<Button icon>test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
