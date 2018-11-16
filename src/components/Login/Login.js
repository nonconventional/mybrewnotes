import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { withRouter } from 'react-router';

import { auth, uiConfig } from '../../utils/createFirebase';
import { userActionCreators } from '../../actions';

function Login({ loginSuccess, history }) {
  const newUiConfig = {
    ...uiConfig,
    callbacks: {
      signInSuccessWithAuthResult: authResult => {
        loginSuccess(authResult.user);
        history.push('/');

        return false;
      },
    },
  };

  return <StyledFirebaseAuth uiConfig={newUiConfig} firebaseAuth={auth} />;
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  ...userActionCreators,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Login),
);
