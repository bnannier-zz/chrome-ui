import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Base, AppBar } from "../";

describe("Base Tests", () => {
  it("Default", function() {
    const wrapper = shallow(
      <Base>
        <AppBar>test</AppBar>
      </Base>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
