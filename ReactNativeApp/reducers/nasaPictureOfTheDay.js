import {
  PUT_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
  PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
  PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION,
} from '../actions/actionTypes';

export const initialState = {
  data: {},
  error: '',
  displayExplanation: false,
  isLoading: true,
};

export default function nasaPictureOfTheDayReducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case PUT_NASA_PICTURE_OF_THE_DAY:
      return {...state, data: action.value};
    case PUT_NASA_PICTURE_OF_THE_DAY_ERROR:
      return {...state, error: action.value};
    case PUT_NASA_PICTURE_OF_THE_DAY_LOADING:
      return {...state, isLoading: action.value};
    case PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION:
      return {...state, displayExplanation: action.value};
    default:
      return state;
  }
}
