import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Grid, GridCell } from "../";

describe("GridCell Tests", () => {
  it("Default", function() {
    const wrapper = mount(
      <Grid>
        <GridCell>test</GridCell>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
