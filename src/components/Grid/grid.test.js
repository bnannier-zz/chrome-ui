import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Grid } from "../";

describe("Grid Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<Grid>test</Grid>);
    expect(wrapper).toMatchSnapshot();
  });
});
