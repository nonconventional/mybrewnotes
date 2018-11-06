import createReducer from '../utils/createReducer';
import { brewActions } from '../actions';

const initialState = [];

const actionHandlers = {
  [brewActions.ADD](state, { payload }) {
    return [...state, payload];
  },
};

export default createReducer(actionHandlers, initialState);
