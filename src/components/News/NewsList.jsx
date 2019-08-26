import React from "react";

import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CardActions,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ButtonLink from "../common/ButtonLink";

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
          <Avatar
            aria-label="recipe"
            src={post.user.image || "/assets/img/no-user-image.png"}
            alt={post.user.username}
          ></Avatar>
        }
        title={post.title}
        subheader={post.created_at}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonLink path={`/news/${post.id}/edit`}>Редактировать</ButtonLink>
        <Button>Удалить</Button>
      </CardActions>
    </Card>
  );
});

const NewsList = () => {
  const news = [
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
  ];
  return (
    <>
     <ButtonLink color="primary" path="/news/add">Добавить</ButtonLink>
      <div>
        {news.map(post => (
          <NewsCard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
