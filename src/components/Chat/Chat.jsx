import React, { PureComponent } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  column: {
    // backgroundColor: '#494949',
    height: "calc(100vh - 80px)",
    display: "flex",
    flexDirection: "column"
  },
  wrapper: {
    width: "100%",
    flex: "1 1 100%",
    paddingTop: theme.spacing(1)
  },
  messageContainer: {
    marginBottom: theme.spacing(2)
  },
  message: {
    padding: theme.spacing(1)
  },
  messagePrimary: {
    backgroundColor: theme.palette.grey.A700
  },
  messageSecondary: {
    backgroundColor: theme.palette.secondary.main
  },
  isMyMessage: {
    alignSelf: "end"
  },
  isAnotherMessage: {
    alignSelf: "flex-end"
  },
  chatArea: {
    overflowY: "scroll"
  }
});

const ChannelsList = withStyles(styles)(({ classes }) => (
  <Paper className={classes.column} square>
    <List>
      {["User 1", "User 2", "User 3", "User 4"].map((text, index) => (
        <ListItem button key={text} selected={index === 1}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Paper>
));

const ActiveChannelArea = withStyles(styles)(({ classes }) => (
  <>
    <CardContent className={classes.chatArea}>
      <Grid container direction="column" wrap="nowrap">
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21
        ].map(message => (
          <Grid
            item
            key={message}
            className={classNames(
              classes.messageContainer,
              message % 3 === 0 ? classes.isMyMessage : classes.isAnotherMessage
            )}
          >
            <Card
              className={classNames(
                classes.message,
                message % 3 === 0
                  ? classes.messagePrimary
                  : classes.messageSecondary
              )}
            >
              Test test
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContent>
    <CardActions>
      <TextField
        label="Label"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button variant="contained" color="primary">
        Отправить
      </Button>
    </CardActions>
  </>
));
class Chat extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ChannelsList />
            </Grid>
            <Grid item xs={8}>
              <Card className={classes.column} square>
                <ActiveChannelArea/>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Chat);
