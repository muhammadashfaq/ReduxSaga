import * as types from "./actionTypes";

// Action Creators
const requestDog = () => {
  return { type: types.API_CALL_REQUEST };
};

const requestDogSuccess = data => {
  const { message } = data;
  return { type: types.API_CALL_SUCCESS, url: message };
};

const requestDogError = () => {
  return { type: types.API_CALL_FAILURE };
};

const fetchDog = () => {
  return { type: types.API_FETCH_DATA };
};

export { requestDog, requestDogSuccess, requestDogError, fetchDog };
