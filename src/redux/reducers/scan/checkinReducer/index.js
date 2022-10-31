import {
  CHECKIN_ATTEMPT,
  CHECKIN_FAILED,
  CHECKIN_SUCCESS,
} from '../../../actions/scan/checkinAction';

const initialState = {
  isLoading: false,
  data: false,
  errorMessage: false,
};

const checkinReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKIN_ATTEMPT:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
      break;
    case CHECKIN_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage,
      };
      break;
    case CHECKIN_FAILED:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage.data.errors,
      };
    default:
      return state;
  }
};

export default checkinReducer;
