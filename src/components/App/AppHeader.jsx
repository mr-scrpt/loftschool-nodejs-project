import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AppBar, Toolbar, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ButtonLink from '../common/ButtonLink';
import {
  userPermissionsSelector,
  isAuthorizedSelector
} from '../../store/auth';

const styles = () => ({
  logo: {
    flexGrow: 1
  }
});

class AppHeader extends PureComponent {
  renderAuthorizedNav() {
    const { permissions } = this.props;
    return (
      <>
        {permissions.news.R && (
          <ButtonLink path="/news" isRouterLink>
            Новости
          </ButtonLink>
        )}
        {permissions.chat.R && (
          <ButtonLink path="/chat" isRouterLink>
            Чат
          </ButtonLink>
        )}

        {permissions.settings.R && (
          <ButtonLink path="/admin_panel" isRouterLink>
            Админка
          </ButtonLink>
        )}
        <ButtonLink path="/profile" isRouterLink>
          Профиль
        </ButtonLink>
      </>
    );
  }
  render() {
    const { classes, isAuthorized } = this.props;
    return (
      <div>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Container>
            <Toolbar>
              <div className={classes.logo}>
                <img src="../../assets/img/logo.png" alt="logo" />
              </div>
              <ButtonLink path="/" isRouterLink>
                Главная
              </ButtonLink>
              {isAuthorized ? this.renderAuthorizedNav() : null}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
  permissions: userPermissionsSelector(state)
});
export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(AppHeader);
