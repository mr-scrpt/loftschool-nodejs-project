import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
const styles = () => ({
  logo: {
    flexGrow: 1,
  },
});
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
class AppHeader extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Container>
            <Toolbar>
              <div className={classes.logo}><img src="../../assets/img/logo.png" alt="logo" /></div>
              <Button color="primary" component={AdapterLink} to="/">Главная</Button>
              <Button component={AdapterLink} to="/news">Новости</Button>
              <Button>Чат</Button>
              <Button>Настройки</Button>
              <Button>Профиль</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(AppHeader)