import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import AppDrawer from '../AppDrawer';
import CreateBrew from '../CreateBrew';
import Login from '../Login';
import Brews from '../Brews';
import Brew from '../Brew';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    textAlign: 'center',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
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
            <Switch>
              <Route exact path="/brews" component={Brews} />
              <Route exact path="/brews/create" component={CreateBrew} />
              <Route exact path="/brews/:id" component={Brew} />
              <Route exact path="/login" component={Login} />
            </Switch>
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
