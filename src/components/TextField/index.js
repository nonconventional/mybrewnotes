import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = ({ input, label, meta: { touched, invalid }, ...custom }) => {
  return (
    <MaterialTextField
      label={label}
      error={touched && invalid}
      {...input}
      {...custom}
    />
  );
};

export default TextField;
