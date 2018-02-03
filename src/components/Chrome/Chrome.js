import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from '../../utilities/configureStore'
import registerServiceWorker from '../../utilities/registerServiceWorker'

function Chrome(routes, reducers) {
  const store = configureStore(reducers);

  const routeComponents = (
      <div>{routes}</div>
  );

  ReactDOM.render(
      <Provider store={store}>
        <div>
          <Router>
            {routeComponents}
          </Router>
        </div>
      </Provider>
      , document.getElementById('root')
  );
  registerServiceWorker();
}

export default Chrome;
