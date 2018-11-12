import React from "react";
import { configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Dropdown } from "../";

describe("Dropdown Tests", () => {
  it("Default", () => {
    const options = [
      { id: "opt1", text: "option 1" },
      { id: "opt2", text: "option 2" },
      { id: "opt3", text: "option 3" }
    ];
    const tree = renderer
      .create(
        <Dropdown
          id="testDropdown"
          name="test"
          label="Test Dropdown:"
          options={options}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
