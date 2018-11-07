import createReducer from '../utils/createReducer';
import { brewActions } from '../actions';

const initialState = [];

const actionHandlers = {
  [brewActions.ADD](state, { payload }) {
    return [...state, payload.brew];
  },
  [brewActions.GET_ALL](state, { payload }) {
    return payload.allBrews;
  },
};

export default createReducer(actionHandlers, initialState);
