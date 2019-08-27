import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import { Paper, Grid, TextField, ButtonGroup, Button } from '@material-ui/core';
import ButtonLink from '../common/ButtonLink';

const styles = theme => ({
  formCard: {
    padding: theme.spacing(2)
  },
  textField: {
    display: 'block',
    width: '100%'
  }
});

class NewsAdd extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.formCard}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Автор"
              className={classes.textField}
              margin="normal"
              disabled
              fullWidth
              value="Ascold2018"
            />
            <TextField
              label="Дата"
              className={classes.textField}
              margin="normal"
              disabled
              fullWidth
              value={'26.08.2019 15:08'}
            />
            <TextField
              label="Заголовок"
              className={classes.textField}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Текст"
              className={classes.textField}
              margin="normal"
              multiline
              fullWidth
              rows={5}
            />
            <ButtonGroup>
              <Button variant="contained" color="secondary">
                Сохранить
              </Button>
              <ButtonLink path="/news" variant="contained">
                Отменить
              </ButtonLink>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewsAdd);
