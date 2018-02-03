import React from 'react'
import { Route } from 'react-router'
import { Chrome } from "./components/index"
import Demo from './demo/Demo'
import reducers from './demo/Reducer'

/**
 * @description Wire-up Phoenix with Login Component.
 */
Chrome (
    <div>
      <Route exact path='/' component={Demo} />
    </div>
    , reducers
);
