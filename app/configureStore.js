import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
  let store = createStoreWithMiddleware(rootReducer)
  return store
}