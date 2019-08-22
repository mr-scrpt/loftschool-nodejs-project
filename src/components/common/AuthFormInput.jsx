import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import {
    Person
} from '@material-ui/icons'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    display: 200,
    marginBottom: theme.spacing(3)
  }
});

const AuthFormInput = withStyles(styles)(({ classes, handleChange, value, label, required}) => {
    return (
      <FormControl className={classes.textField} required={required}>
        <InputLabel htmlFor="username">{label}</InputLabel>
        <Input
          id="username"
          type="text"
          value={value}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
             <Person />
            </InputAdornment>
          }
        />
      </FormControl>
    )
  })

export default AuthFormInput;