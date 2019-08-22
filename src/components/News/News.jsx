import React, { PureComponent } from "react";
import {
  Container,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  wrapper: {
    background: 'url("/assets/img/news-background.png") no-repeat',
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    flex: "1 1 100%",
    paddingTop: '40px'
  }
});

class News extends PureComponent {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>Новости</Typography>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(News);