import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "../../utilities/configureStore";
import registerServiceWorker from "../../utilities/registerServiceWorker";
import chrome from "../reducers";

function Chrome(view, reducers) {
  const store = configureStore(
    combineReducers({
      app: reducers,
      chrome
    })
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router>{view}</Router>
    </Provider>,
    document.getElementById("root")
  );
}

export default Chrome;
