import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import watchNasaPictureOfDay from '../sagas/nasaPictureOfTheDaySaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(watchNasaPictureOfDay);

  return store;
}
