import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  Https
} from '@material-ui/icons'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    display: 200,
    marginBottom: theme.spacing(3)
  }
});

const PasswordInput = withStyles(styles)(({ classes, handleChange, value, label }) => {
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl className={classes.textField} required>
      <InputLabel htmlFor="adornment-password">{label}</InputLabel>
      <Input
        id="adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <Https />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default PasswordInput;