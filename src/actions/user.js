const actions = {
  LOGIN_SUCCESS: '@@user/LOGIN_SUCCESS',
  LOGOUT_SUCCESS: '@@user/LOGOUT_SUCCESS',
};

const actionCreators = {
  loginSuccess(user) {
    return {
      type: actions.LOGIN_SUCCESS,
      payload: { user },
    };
  },
  logoutSuccess(user) {
    return {
      type: actions.LOGOUT_SUCCESS,
    };
  },
};

export { actionCreators, actions };
