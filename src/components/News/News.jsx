import React, { PureComponent } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  wrapper: {
    width: "100%",
    flex: "1 1 100%",
    paddingTop: "40px"
  },
  card: {
    marginBottom: theme.spacing(2)
  }
});

const NewsCard = withStyles(styles)(({ classes, post }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={post.user.image || '/assets/img/no-user-image.png'} alt={post.user.username}></Avatar>
        }
        title={post.title}
        subheader={post.created_at}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.text}
        </Typography>
      </CardContent>
    </Card>
  );
});

class News extends PureComponent {
  state = {
    news: [
      {
        id: 1,
        title: "Новость 1",
        text: "Всем привет! Эта новая новость!",
        created_at: "2018-06-29T19:00:04.645Z",
        user: { id: 1, username: "ascold2019", image: null }
      },
      {
        id: 2,
        title: "Новость 2",
        text: "Всем привет! Эта новая новость!",
        created_at: "2018-06-29T19:00:04.645Z",
        user: { id: 1, username: "ascold2019", image: null }
      },
      {
        id: 3,
        title: "Новость 3",
        text: "Всем привет! Эта новая новость!",
        created_at: "2018-06-29T19:00:04.645Z",
        user: { id: 1, username: "ascold2019", image: null }
      }
    ]
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Новости компании
          </Typography>
          <div>
            { this.state.news.map(post =><NewsCard post={post} key={post.id}/>) }
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(News);
