import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header';
import AppDrawer from '../AppDrawer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
});

class App extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state;

    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Header handleDrawerToggle={this.handleDrawerToggle} />
          <AppDrawer
            handleDrawerToggle={this.handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
          </main>
        </div>
      </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
