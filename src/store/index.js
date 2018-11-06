import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers';

const history = createHistory();

/**
 * Initialize the redux store.
 *   - connects middleware and reducers
 *   - configures the chrome extension for redux
 */

/* istanbul ignore next */
function createStore(initialState = {}) {
  let composeEnhancers = compose;

  // Setup redux devtools chrome extension, if available
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk),
  )(reduxCreateStore);

  /**
   * Connect reducers to the redux store.
   */
  return createStoreWithMiddleware(createRootReducer(history), initialState);
}

export { createStore, history };
