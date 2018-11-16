import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import brews from './brews';
import user from './user';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    brews,
    user,
  });
