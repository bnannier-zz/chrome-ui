import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

export default function configureStore(reducers) {
  return createStore(
      reducers,
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
      )
  )
}
