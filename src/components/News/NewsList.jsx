import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getNews,
  isLoadingSelector,
  isLoadedSelector,
  newsListSelector
} from '../../store/news';
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  CardActions,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ButtonLink from '../common/ButtonLink';

const styles = theme => ({
  wrapper: {
    width: '100%',
    flex: '1 1 100%',
    paddingTop: '40px'
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
            src={post.user.image || '/assets/img/no-user-image.png'}
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

class NewsList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getNews());
  }
  render() {
    const { isLoading, isLoaded, news } = this.props;
    return (
      <>
        <ButtonLink color="primary" path="/news/add">
          Добавить
        </ButtonLink>
        <div>
          {isLoading ? <div>Loading...</div> : null}
          {isLoaded ? (
            news.length ? (
              news.map(post => <NewsCard post={post} key={post.id} />)
            ) : (
              <div>Нет новостей</div>
            )
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  isLoaded: isLoadedSelector(state),
  news: newsListSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(NewsList);
