import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { AppBar, AppBarSection } from "../";

describe("AppBarSection Tests", () => {
  it("Check Sections Left and Right", function() {
    const wrapper = mount(
      <AppBar>
        <AppBarSection left>Left Side</AppBarSection>
        <AppBarSection right>Right Side</AppBarSection>
      </AppBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
