import React from "react";

import Gallery from "./gallery";
import { Chrome } from "./components";
// import reducers from "./gallery/reducers";

function mainView() {
  return <Gallery />;
}

Chrome(mainView() /* reducers */);
