import { LOAD_LANGUAGE, CHANGE_LANGUAGE } from "./Actions";

const initialState = {
  selected: "en",
  options: [{ id: "en", text: "EN" }, { id: "fr", text: "FR" }]
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        selected: action.lang
      };
    case LOAD_LANGUAGE:
      return {
        ...state,
        selected: action.lang
      };
    default:
      return state;
  }
}
