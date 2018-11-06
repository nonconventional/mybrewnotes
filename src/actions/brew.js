const actions = {
  ADD: '@@brew/ADD',
};

const actionCreators = {
  add(payload) {
    return {
      type: actions.ADD,
      payload,
    };
  },
};

export { actionCreators, actions };
