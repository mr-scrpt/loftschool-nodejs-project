import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import theme from './../../theme';
import createAppStore from '../../store';
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

function App({ classes }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={createAppStore()}>
        <BrowserRouter>
          <div className={classes.root}>
            <AppHeader />
            <Box className={classes.container}>
              <Switch>
                <Route path="/" exact component={withNotifications(Auth)} />
                <Route
                  path="/registration"
                  component={withNotifications(Auth)}
                />
                <Route
                  path="/news"
                  component={withLayoutAndNotifications(News)}
                />
                <Route
                  path="/chat"
                  component={withLayoutAndNotifications(Chat)}
                />
                <Route
                  path="/profile"
                  component={withLayoutAndNotifications(Profile)}
                />
                <Route
                  path="/admin_panel"
                  component={withLayoutAndNotifications(AdminPanel)}
                />
              </Switch>
            </Box>
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
