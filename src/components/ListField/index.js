import React from 'react';
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

function ListField(props) {
  const { classes, fields } = props;
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
            <InputAdornment position="start">{`${index + 1}.`}</InputAdornment>
          ),
        }}
        margin="dense"
      />
    );
  });

  return (
    <div className={classes.container}>
      {items}
      <Button
        color="primary"
        onClick={() => {
          fields.push('');
        }}
      >
        <AddIcon className={classes.leftIcon} />
        <span>ADD</span>
      </Button>
    </div>
  );
}

export default withStyles(styles)(ListField);
