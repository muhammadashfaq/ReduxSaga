import { takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/actionTypes";
import {
  requestDogSuccess,
  requestDogError
} from "../actions/actions";

//watcher saga, watches for actions dispatached to the store , starts worker saga
export default function* watcherSaga() {
  yield takeEvery(types.API_CALL_REQUEST, workerSaga);
  //yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga: makes the api call when watcher saga sees the action
export  function* workerSaga() {

  try {
    
    //yield put(requestDog());
    const response = yield call(fetchDog);

    // dispatch a success action to the store with the new dog
    yield put(requestDogSuccess(response.data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(requestDogError());
  }
}
