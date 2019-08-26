import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  return store;
};

export default createAppStore;