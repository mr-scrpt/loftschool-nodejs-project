import React, { PureComponent } from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
const styles = () => ({
  logo: {
    flexGrow: 1,
  },
});

class AppHeader extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <div className={classes.logo}><img src="../../assets/img/logo.png" alt="logo" /></div>
            <Button color="primary">Главная</Button>
            <Button>Новости</Button>
            <Button>Чат</Button>
            <Button>Настройки</Button>
            <Button>Профиль</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(AppHeader)