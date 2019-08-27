import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUserProfileFromToken } from '../../store/auth';

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import AppHeader from './AppHeader';
import Auth from '../Auth';
import News from '../News';
import Chat from '../Chat';
import Profile from '../Profile';
import AdminPanel from '../AdminPanel';
import withNotifications from '../common/withNotificationsHOC';


const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  container: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column'
  },
  mainLayoutWrapper: {
    background: 'url("/assets/img/another-background.png") no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100%',
    flex: '1 1 100%',
    display: 'flex',
    alignItems: 'stretch'
  }
});

const MainLayout = withStyles(styles)(({ children, classes }) => (
  <div className={classes.mainLayoutWrapper}>{children}</div>
));

const withLayout = Component => props => (
  <MainLayout>
    <Component {...props} />
  </MainLayout>
);

const withLayoutAndNotifications = Component =>
  withNotifications(withLayout(Component));

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(getUserProfileFromToken());
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppHeader />
        <Box className={classes.container}>
          <Switch>
            <Route path="/" exact component={withNotifications(Auth)} />
            <Route path="/registration" component={withNotifications(Auth)} />
            <PrivateRoute
              path="/news"
              component={withLayoutAndNotifications(News)}
            />
            <PrivateRoute
              path="/chat"
              component={withLayoutAndNotifications(Chat)}
            />
            <PrivateRoute
              path="/profile"
              component={withLayoutAndNotifications(Profile)}
            />
            <PrivateRoute
              path="/admin_panel"
              component={withLayoutAndNotifications(AdminPanel)}
            />
          </Switch>
        </Box>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect()
)(App);
