import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  paper: {
    margin: theme.spacing.unit,
  },
});

class Brew extends Component {
  state = {
    ingredientsChecked: [],
    stepsChecked: [],
  };

  createHandleIngredientChecked = value => () => {
    this.setState(prevState => {
      const { ingredientsChecked } = prevState;
      const currentIndex = ingredientsChecked.indexOf(value);
      const newChecked = [...ingredientsChecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      return {
        ingredientsChecked: newChecked,
      };
    });
  };

  createHandleStepsChecked = value => () => {
    this.setState(prevState => {
      const { stepsChecked } = prevState;
      const currentIndex = stepsChecked.indexOf(value);
      const newChecked = [...stepsChecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      return {
        stepsChecked: newChecked,
      };
    });
  };

  render() {
    // const { brew } = this.props;
    const { classes } = this.props;

    const brew = {
      name: 'DFJkljelkfq',
      description: 'kdlasjfelq',
      'batch-size': '100 gallons',
      ingredients: ['bob', 'water', 'bit of honey', 'magic'],
      steps: ['Do stuff', 'magic', '??????', 'profit'],
    };

    if (!brew) {
      return <Redirect to="/brews" />;
    }

    const { name, description, ingredients, steps } = brew;

    return (
      <React.Fragment>
        <Typography variant="title">{name}</Typography>
        <Typography variant="subheading">{description}</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="title">Ingredients</Typography>
              <List>
                {ingredients.map(value => (
                  <ListItem
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={this.createHandleIngredientChecked(value)}
                  >
                    <Checkbox
                      checked={
                        this.state.ingredientsChecked.indexOf(value) !== -1
                      }
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="title">Steps</Typography>
              <List>
                {steps.map((value, index) => (
                  <ListItem
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={this.createHandleStepsChecked(value)}
                  >
                    <Checkbox
                      checked={this.state.stepsChecked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={`${index + 1}. ${value}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
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

export default withStyles(style)(connect(mapStateToProps)(Brew));
