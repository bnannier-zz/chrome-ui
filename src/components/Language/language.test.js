import React from "react";
import { configure, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { Language } from "../";
import * as languageActions from "./Actions";
import languageReducer from "./Reducer";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Language Tests", () => {
  let initialState = {},
    store = null;
  const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
  const LOAD_LANGUAGE = "LOAD_LANGUAGE";

  beforeEach(() => {
    initialState = {
      chrome: {
        language: {
          selected: "en",
          options: [{ id: "en", text: "EN" }, { id: "fr", text: "FR" }]
        }
      }
    };

    store = mockStore(initialState);
  });

  it("Renders correctly", () => {
    const wrapper = shallow(<Language />, { context: { store } });
    expect(wrapper.render().find("select").length).toBe(1);
    expect(wrapper.render().find("label").length).toBe(1);
    expect(wrapper.render().find("option").length).toBe(2);
  });

  it("Should change the language when changeLanguage called", () => {
    const expectedAction = { type: CHANGE_LANGUAGE, lang: "en" };
    expect(languageActions.changeLanguage("en")).toEqual(expectedAction);
  });

  it("Should handle CHANGE_LANGUAGE action", () => {
    const testAction = { type: CHANGE_LANGUAGE, lang: "fr" },
      returnedState = languageReducer(undefined, testAction);
    expect(returnedState.selected).toEqual("fr");
  });

  it("Should handle LOAD_LANGUAGE action", () => {
    const testAction = { type: LOAD_LANGUAGE, lang: "en" },
      returnedState = languageReducer(undefined, testAction);
    expect(returnedState.selected).toEqual("en");
  });

  it("Return initial language state when no recognized action performed", () => {
    const testAction = { type: "test" },
      returnedState = languageReducer(undefined, testAction);
    expect(returnedState).toEqual(initialState.chrome.language);
  });

  it("Should dispatch actions", () => {
    const dispatchSpy = jest.spyOn(store, "dispatch"),
      wrapper = shallow(<Language />, { context: { store } });
    wrapper.props().changeLanguage({ target: { value: "fr" } });
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
