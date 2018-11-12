import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Grid, GridCell } from "../";

describe("GridCell Tests", () => {
  it("Default", function() {
    const wrapper = shallow(
      <Grid>
        <GridCell>test</GridCell>
      </Grid>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
