import { firestore } from '../utils/createFirebase';
import { SubmissionError } from 'redux-form';

const BREWS = 'brews';

const actions = {
  ADD: '@@brew/ADD',
  GET_ALL: '@@brew/GET_ALL',
};

const actionCreators = {
  add(data) {
    return async (dispatch, getState) => {
      const { user } = getState();
      try {
        const ref = await firestore.collection(BREWS).add({
          ...data,
          user: {
            displayName: user.displayName,
            id: user.uid,
          },
        });
        dispatch(actionCreators.addSuccess({ id: ref.id, ...data }));
      } catch (e) {
        throw new SubmissionError({});
      }
    };
  },
  addSuccess(brew) {
    return {
      type: actions.ADD,
      payload: { brew },
    };
  },

  getAll() {
    return async dispatch => {
      try {
        const brewsRef = await firestore.collection(BREWS);
        const snapshot = await brewsRef.get();
        let allBrews = [];
        snapshot.forEach(doc => {
          allBrews.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch(actionCreators.getAllSuccess(allBrews));
      } catch (e) {
        // do stuff
        console.log(e);
      }
    };
  },

  getAllSuccess(allBrews) {
    return {
      type: actions.GET_ALL,
      payload: { allBrews },
    };
  },
};

export { actionCreators, actions };
