import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import AppBarRow from "./AppBarRow";

describe("AppBarRow Tests", () => {
  it("Render AppBarRow", function() {
    const wrapper = shallow(
      <div>
        <AppBarRow>Chrome UI</AppBarRow>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
