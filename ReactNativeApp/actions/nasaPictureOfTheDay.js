import {
  GET_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
  PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
  PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION,
} from '../actions/actionTypes';

export function getNasaPictureOfTheDayAction(value) {
  return {type: GET_NASA_PICTURE_OF_THE_DAY, value};
}

export function putNasaPictureOfTheDayAction(value) {
  return {type: PUT_NASA_PICTURE_OF_THE_DAY, value};
}

export function putNasaPictureOfTheDayErrorAction(value) {
  return {type: PUT_NASA_PICTURE_OF_THE_DAY_ERROR, value};
}

export function putNasaPictureOfTheDayLoadingAction(value) {
  return {type: PUT_NASA_PICTURE_OF_THE_DAY_LOADING, value};
}

export function putDisplayNasaPictureOfTheDayExplanationAction(value) {
  return {type: PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION, value};
}
