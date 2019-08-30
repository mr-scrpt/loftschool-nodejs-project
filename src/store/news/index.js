import { createActions, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import request from '../../helpers/request';
import { openNotification } from '../notifications';

export const isLoadingSelector = state => state.news.isLoading;
export const isLoadedSelector = state => state.news.isLoaded;
export const newsListSelector = state => state.news.news;

export const {
  setIsLoading,
  setNewsList,
  setToZeroNewsList
} = createActions({
  SET_IS_LOADING: n => n,
  SET_NEWS_LIST: n => n,
  SET_TO_ZERO_NEWS_LIST: n => n
}, { prefix: 'news' })

const isLoading = handleActions({
  [setIsLoading]: (_, action) => action.payload
}, false)

const isLoaded = handleActions({
  [setNewsList]: (_, action) => true
}, false)

const news = handleActions({
  [setNewsList]: (_, action) => action.payload,
  [setToZeroNewsList]: () => []
}, [])

export default combineReducers({
  isLoading,
  isLoaded,
  news
})

export const getNews = () => (dispatch, getState) => {
  if (isLoadedSelector(getState())) return;
  dispatch(setIsLoading(true))
  request({ url: '/news', getState, dispatch })
    .then(data => dispatch(setNewsList(data)))
    .catch(error => console.log(error))
    .finally(() => dispatch(setIsLoading(false)))
}