import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
const styles = theme => ({
  logo: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
class AppHeader extends PureComponent {
  render() {
    const { classes, location } = this.props;
    return (
      <div>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Container>
            <Toolbar>
              <div className={classes.logo}><img src="../../assets/img/logo.png" alt="logo" /></div>
              <Button color={location.pathname === '/' ? 'primary' : 'default'} component={AdapterLink} to="/">Главная</Button>
              <Button color={location.pathname === '/news' ? 'primary' : 'default'} component={AdapterLink} to="/news">Новости</Button>
              <Button color={location.pathname === '/chat' ? 'primary' : 'default'} component={AdapterLink} to="/chat">Чат</Button>
              <Button>Настройки</Button>
              <Button>Профиль</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(AppHeader))