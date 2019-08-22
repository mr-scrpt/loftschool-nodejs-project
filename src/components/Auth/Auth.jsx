import React, { PureComponent } from "react";
import { Route, Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Paper,
  Button
} from "@material-ui/core";
import AuthFormInput from '../common/AuthFormInput'
import PasswordInput from '../common/PasswordInput'
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = () => ({
  wrapper: {
    background: 'url("/assets/img/background.png") no-repeat',
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    flex: "1 1 100%",
    paddingTop: '40px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 40px',
    maxWidth: '300px'
  },
  textCenter: {
    textAlign: 'center'
  }
});


const LoginForm = withStyles(styles)(({ classes, handleChange, values }) => {
  return (
    <>
      <Paper className={classes.form}>
        <AuthFormInput handleChange={handleChange('username')} value={values.username} label="Имя пользователя" required/>
        <PasswordInput handleChange={handleChange('password')} value={values.password} label="Пароль"/>
        <Button color="primary" variant="contained">Войти</Button>
      </Paper>
      <Typography className={classNames(classes.textCenter, classes.form)} >Впервые на сайте? <Link to="/registration">Регистрация</Link></Typography>
    </>
  )
});

const RegistrationForm = withStyles(styles)(({ classes, handleChange, values }) => {
  return (
    <>
      <Paper className={classes.form}>
        <AuthFormInput handleChange={handleChange('username')} value={values.username} label="Имя пользователя" required/>
        <AuthFormInput handleChange={handleChange('lastname')} value={values.lastname} label="Фамилия"/>
        <AuthFormInput handleChange={handleChange('firstname')} value={values.firstname} label="Имя"/>
        <AuthFormInput handleChange={handleChange('patronicname')} value={values.patronicname} label="Отчество"/>
        <PasswordInput handleChange={handleChange('password')} value={values.password} label="Пароль"/>
        <PasswordInput handleChange={handleChange('repeatPassword')} value={values.repeatPassword} label="Повторить пароль"/>
        <Button color="primary" variant="contained">Войти</Button>
      </Paper>
      <Typography className={classNames(classes.textCenter, classes.form)} >Уже зарегистрированы? <Link to="/">Войти</Link></Typography>
    </>
  )
});

class Auth extends PureComponent {
  state = {
    username: "",
    password: "",
    firstname: '',
    lastname: '',
    patronicname: ''
  };

  handleChange = prop => event => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Ваше уютное
            <br />
            рабочее пространство
          </Typography>
          <Route path="/" exact component={() => <LoginForm handleChange={this.handleChange} values={this.state}/>}/>
          <Route path="/registration" component={() => <RegistrationForm handleChange={this.handleChange} values={this.state}/>}/>
        </Container>
      </div>
    );
  }
}


export default withStyles(styles)(Auth);
