import React, { PureComponent, useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Typography, Paper, Button } from '@material-ui/core';
import AuthFormInput from '../common/AuthFormInput';
import PasswordInput from '../common/PasswordInput';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { compose } from 'recompose';
import {
  loginUser,
  registerUser,
  logoutUser,
  isAuthorizedSelector
} from '../../store/auth';

const styles = () => ({
  wrapper: {
    background: 'url("/assets/img/background.png") no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100%',
    flex: '1 1 100%',
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

const LoginForm = compose(
  withStyles(styles),
  connect()
)(({ classes, dispatch }) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const { username, password } = values;
    dispatch(loginUser({ username, password }));
  };
  return (
    <>
      <Paper className={classes.form} component="form" onSubmit={handleSubmit}>
        <AuthFormInput
          handleChange={handleChange('username')}
          value={values.username}
          id="username"
          label="Имя пользователя"
          required
        />
        <PasswordInput
          handleChange={handleChange('password')}
          value={values.password}
          id="password"
          label="Пароль"
        />
        <Button color="primary" variant="contained" type="submit">
          Войти
        </Button>
      </Paper>
      <Typography className={classNames(classes.textCenter, classes.form)}>
        Впервые на сайте? <Link to="/registration">Регистрация</Link>
      </Typography>
    </>
  );
});

const RegistrationForm = compose(
  withStyles(styles),
  connect(),
  withRouter
)(({ classes, dispatch, history }) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    firstname: '',
    lastname: '',
    patronicname: ''
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const { username, password, firstname, lastname, patronicname } = values;
    dispatch(
      registerUser({ username, password, firstname, lastname, patronicname })
    )
      .then(() => history.push('/'))
      .catch(console.error);
  };
  return (
    <>
      <Paper className={classes.form} component="form" onSubmit={handleSubmit}>
        <AuthFormInput
          id="username"
          handleChange={handleChange('username')}
          value={values.username}
          label="Имя пользователя"
          required
        />
        <AuthFormInput
          id="lastname"
          handleChange={handleChange('lastname')}
          value={values.lastname}
          label="Фамилия"
        />
        <AuthFormInput
          id="firstname"
          handleChange={handleChange('firstname')}
          value={values.firstname}
          label="Имя"
        />
        <AuthFormInput
          id="patronicname"
          handleChange={handleChange('patronicname')}
          value={values.patronicname}
          label="Отчество"
        />
        <PasswordInput
          id="password"
          handleChange={handleChange('password')}
          value={values.password}
          label="Пароль"
        />
        <PasswordInput
          id="repeatPassword"
          handleChange={handleChange('repeatPassword')}
          value={values.repeatPassword}
          label="Повторить пароль"
        />
        <Button color="primary" variant="contained" type="submit">
          Зарегистрироваться
        </Button>
      </Paper>
      <Typography className={classNames(classes.textCenter, classes.form)}>
        Уже зарегистрированы? <Link to="/">Войти</Link>
      </Typography>
    </>
  );
});

const LogoutForm = compose(
  withStyles(styles),
  connect()
)(({ classes, dispatch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logoutUser());
  };
  return (
    <Paper className={classes.form} component="form" onSubmit={handleSubmit}>
      <Button color="primary" variant="contained" type="submit">
        Выйти
      </Button>
    </Paper>
  );
});

class Auth extends PureComponent {
  submitLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { classes, isAuthorized } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Ваше уютное
            <br />
            рабочее пространство
          </Typography>
          {isAuthorized ? (
            <LogoutForm />
          ) : (
            <>
              <Route path="/" exact component={LoginForm} />
              <Route path="/registration" component={RegistrationForm} />
            </>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state)
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  withRouter
)(Auth);
