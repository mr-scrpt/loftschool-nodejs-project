import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
const styles = () => ({
  logo: {
    flexGrow: 1
  },
});
const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));
const ButtonLink = withRouter(({ path, location, children }) => (
  <Button
    color={location.pathname === path ? "primary" : "default"}
    component={AdapterLink}
    to={path}
  >
    {children}
  </Button>
));

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
              <ButtonLink path="/">Главная</ButtonLink>
              <ButtonLink path="/news">Новости</ButtonLink>
              <ButtonLink path="/chat">Чат</ButtonLink>
              <ButtonLink path="/profile">Профиль</ButtonLink>
              <Button>Настройки</Button>
              <Button variant="contained" color="primary">Выйти</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppHeader);
