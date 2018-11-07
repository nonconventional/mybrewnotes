import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, reset } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';

import { required } from '../../utils/validation';
import TextField from '../TextField';
import ListField from '../ListField';
import { brewActionCreators } from '../../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const afterSubmit = (result, dispatch) => {
  dispatch(reset('createBrew'));
  dispatch(push('/brews'));
};

class CreateBrew extends Component {
  render() {
    const { add, classes, handleSubmit, pristine, submitting } = this.props;

    return (
      <form className={classes.container} onSubmit={handleSubmit(add)}>
        <Field
          id="name"
          component={TextField}
          margin="dense"
          name="name"
          placeholder="Name"
          label="Name"
          validate={[required]}
        />
        <Field
          id="description"
          component={TextField}
          label="Description"
          multiline
          name="description"
          margin="dense"
          placeholder="Description"
          rows={3}
          rowsMax={5}
          validate={[required]}
        />
        <Field
          id="batch-size"
          component={TextField}
          margin="dense"
          name="batch-size"
          placeholder="Batch Size"
          label="Batch Size"
          validate={[required]}
        />
        <Divider className={classes.divider} />
        <Typography align="left" gutterBottom variant="h6">
          Ingredients
        </Typography>
        <FieldArray component={ListField} name="ingredients" />
        <Divider className={classes.divider} />
        <Typography align="left" gutterBottom variant="h6">
          Steps
        </Typography>
        <FieldArray component={ListField} name="steps" />
        <Divider className={classes.divider} />
        <Button color="primary" disabled={pristine || submitting} type="submit">
          Save
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  add: brewActionCreators.add,
};

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'createBrew',
    onSubmitSuccess: afterSubmit,
  })(withStyles(styles)(CreateBrew)),
);
