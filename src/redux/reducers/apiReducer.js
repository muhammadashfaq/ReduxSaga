import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

const initialState = {
  url: "",
  loading: false,
  error: false
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        url: "",
        loading: true,
        error: false
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        url: action.url,
        loading: false,
        error: false
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default apiReducer;
