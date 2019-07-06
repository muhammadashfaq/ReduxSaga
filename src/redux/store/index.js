import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers";
import watcherSaga from "../sagas/apiSaga";
// Logger with default options
import logger from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



// create a redux store with our reducer above and middlewaree
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware,logger))
);

// run the saga
sagaMiddleware.run(watcherSaga);