import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Brew extends Component {
  render() {
    const { brew } = this.props;

    if (!brew) {
      return <Redirect to="/brews" />;
    }

    return (
      <Paper>
        <Typography>{brew.name}</Typography>
      </Paper>
    );
  }
}

Brew.propTypes = {
  match: PropTypes.object,
  brew: PropTypes.object,
};

function mapStateToProps(state, props) {
  const brew = state.brews[props.match.params.id];

  return {
    brew,
  };
}

export default connect(mapStateToProps)(Brew);
