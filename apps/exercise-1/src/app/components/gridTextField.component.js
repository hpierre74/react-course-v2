import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useInput } from '../hooks/useInput.hook';

export const GridTextField = memo(({ initialState, props, gridProps, inputName, onBlur }) => {
  const [value, onChange] = useInput(initialState);

  return (
    <Grid item {...gridProps}>
      <TextField
        required
        id={inputName}
        name={inputName}
        onBlur={onBlur}
        variant="standard"
        fullWidth
        {...props}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
});

GridTextField.displayName = 'GridTextField';

GridTextField.propTypes = {
  props: PropTypes.object.isRequired,
  gridProps: PropTypes.object.isRequired,
  inputName: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  initialState: PropTypes.any,
};
