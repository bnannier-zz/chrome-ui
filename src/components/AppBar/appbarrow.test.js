import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import AppBarRow from "./AppBarRow";

describe("AppBarRow Tests", () => {
  it("Default", function() {
    const wrapper = shallow(<AppBarRow>test</AppBarRow>);
    expect(wrapper).toMatchSnapshot();
  });
});
