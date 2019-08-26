import React, { PureComponent } from "react";
import {
  Container,
  Typography,
  Avatar,
  Grid,
  Paper,
  Button,
  TextField,
  CardActions
} from "@material-ui/core";
import AspectRatio from "react-aspect-ratio";
import PasswordInput from '../common/PasswordInput'
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  wrapper: {
    width: "100%",
    flex: "1 1 100%",
    paddingTop: "40px"
  },
  formCard: {
    padding: theme.spacing(2)
  },
  avatarPreview: {
    width: "100%",
    height: "100%",
    borderRadius: "8px"
  },
  avatarPreviewWrapper: {
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  uploadButton: {
    display: "block",
    textAlign: "center"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(3)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formActions: {
    marginTop: 'auto',
    padding: 0
  }
});

class Profile extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Paper className={classes.formCard}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <AspectRatio className={classes.avatarPreviewWrapper}>
                  <Avatar
                    className={classes.avatarPreview}
                    src="/assets/img/no-user-image-big.png"
                  ></Avatar>
                </AspectRatio>
                <Button
                  className={classes.uploadButton}
                  variant="contained"
                  component="label"
                  color="primary"
                >
                  Загрузить файл
                  <input type="file" style={{ display: "none" }} />
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="column" style={{ height: '100%' }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Общая информация
                  </Typography>
                  <div className={classes.form}>
                    <TextField
                      label="Фамилия"
                      className={classes.textField}
                      margin="normal"
                    />
                    <TextField
                      label="Имя"
                      className={classes.textField}
                      margin="normal"
                    />
                    <TextField
                      label="Отчество"
                      className={classes.textField}
                      margin="normal"
                    />
                  </div>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Пароль
                  </Typography>
                  <div className={classes.form}>
                    <PasswordInput
                      label="Старый пароль"
                      className={classes.textField}
                      value=""
                      handleChange={() => {}}
                    />
                    <PasswordInput
                      label="Новый пароль"
                      className={classes.textField}
                      value=""
                      handleChange={() => {}}
                    />
                    <PasswordInput
                      label="Подтверждение пароля"
                      className={classes.textField}
                      value=""
                      handleChange={() => {}}
                    />
                  </div>
                  <CardActions className={classes.formActions}>
                    <Button color="primary" variant="contained">Сохранить</Button>
                    <Button variant="outlined">Сбросить</Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
