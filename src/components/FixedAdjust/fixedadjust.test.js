import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { FixedAdjust } from "../";

describe("FixedAdjust Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<FixedAdjust>test</FixedAdjust>);
    expect(wrapper).toMatchSnapshot();
  });
});
