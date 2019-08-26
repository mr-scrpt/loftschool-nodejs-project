import React, { PureComponent } from "react";
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonLink from '../common/ButtonLink'
const styles = () => ({
  logo: {
    flexGrow: 1
  },
});


class AppHeader extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Container>
            <Toolbar>
              <div className={classes.logo}>
                <img src="../../assets/img/logo.png" alt="logo" />
              </div>
              <ButtonLink path="/" isRouterLink>Главная</ButtonLink>
              <ButtonLink path="/news" isRouterLink>Новости</ButtonLink>
              <ButtonLink path="/chat" isRouterLink>Чат</ButtonLink>
              <ButtonLink path="/profile" isRouterLink>Профиль</ButtonLink>
              <ButtonLink path="/admin_panel" isRouterLink>Админка</ButtonLink>
              <Button variant="contained" color="primary">Выйти</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppHeader);
