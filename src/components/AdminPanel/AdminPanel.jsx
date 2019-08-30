import React, { PureComponent } from "react";
import {
  Container,
  Avatar,
  Grid,
  Paper,
  Button,
  ButtonGroup,
  Select,
  FormControl,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SettingsFormGroup from './AdminPanelSettingsFormGroup'

const styles = theme => ({
  wrapper: {
    width: "100%",
    flex: "1 1 100%",
    paddingTop: "40px"
  },
  formCard: {
    padding: theme.spacing(2)
  },
  userSelect: {
    width: "100%"
  },
  userAvatar: {
    marginRight: theme.spacing(2)
  },
  mb3: {
    marginBottom: theme.spacing(3)
  }
});

class AdminPanel extends PureComponent {
  state = {
    selectedUser: "",
    access: {
      chat: {
        C: true,
        R: true,
        U: false,
        D: false
      },
      news: {
        C: true,
        R: true,
        U: false,
        D: false
      },
      settings: {
        C: true,
        R: true,
        U: false,
        D: false
      }
    }
  };
  handleChange = part => partRule => event => {
    const { checked } = event.target;
    this.setState({
      access: {
        ...this.state.access,
        [part]: { ...this.state.access[part], [partRule]: checked }
      }
    });
  };
  handleChangeUser = event => {
    const { value } = event.target;
    this.setState({ selectedUser: value });
  };
  render() {
    const { classes } = this.props;
    const { selectedUser } = this.state;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Paper className={classes.formCard}>
            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              className={classes.mb3}
            >
              <Avatar
                src="/assets/img/no-user-image.png"
                className={classes.userAvatar}
              ></Avatar>
              <FormControl className={classes.userSelect}>
                <InputLabel htmlFor="age-simple">
                  Выберите пользователя
                </InputLabel>
                <Select
                  value={this.state.selectedUser}
                  onChange={this.handleChangeUser}
                >
                  <MenuItem value={null}>Не выбран</MenuItem>
                  <MenuItem value={1}>Ascold</MenuItem>
                  <MenuItem value={2}>Krabaton</MenuItem>
                  <MenuItem value={3}>Serkin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {selectedUser && this.renderForms()}
          </Paper>
        </Container>
      </div>
    );
  }
  renderForms() {
    const { classes } = this.props;
    return (
      <>
        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={4}>
            <SettingsFormGroup
              label="Настройки системы"
              values={this.state.access["settings"]}
              handleChange={this.handleChange("settings")}
            />
          </Grid>
          <Grid item xs={4}>
            <SettingsFormGroup
              label="Новости"
              values={this.state.access["news"]}
              handleChange={this.handleChange("news")}
            />
          </Grid>
          <Grid item xs={4}>
            <SettingsFormGroup
              label="Чат"
              values={this.state.access["chat"]}
              handleChange={this.handleChange("chat")}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
          <ButtonGroup>
            <Button variant="contained" color="secondary">
              Сохранить
            </Button>
            <Button variant="contained">Отменить</Button>
            <Button variant="contained">Удалить пользователя</Button>
          </ButtonGroup>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(AdminPanel);
