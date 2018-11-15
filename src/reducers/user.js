import createReducer from '../utils/createReducer';
import { userActions } from '../actions';

const initialState = null;

const actionHandlers = {
  [userActions.LOGIN_SUCCESS](state, { payload }) {
    return payload.user;
  },
  [userActions.LOGOUT_SUCCESS](state) {
    return null;
  },
};

export default createReducer(actionHandlers, initialState);
