import React, { Component } from 'react';
import { Field } from 'redux-form';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

import TextField from '../TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class ListField extends Component {
  constructor(props) {
    super(props);

    this.fieldRef = React.createRef();
  }

  handleAddClick = () => {
    this.props.fields.push('');
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.fields.length !== this.props.fields.length &&
      this.fieldRef.current
    ) {
      this.fieldRef.current.focus();
    }
  }

  render() {
    const { classes, fields } = this.props;
    const listName = fields.name;

    const items = fields.map((listItem, index) => {
      const name = `${listName}.${index}`;
      return (
        <Field
          key={name}
          component={TextField}
          index={index}
          name={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{`${index +
                1}.`}</InputAdornment>
            ),
          }}
          inputProps={{
            ref: fields.length - 1 === index ? this.fieldRef : null,
          }}
          margin="dense"
        />
      );
    });

    return (
      <div className={classes.container}>
        {items}
        <Button color="primary" onClick={this.handleAddClick}>
          <AddIcon className={classes.leftIcon} />
          <span>ADD</span>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ListField);
