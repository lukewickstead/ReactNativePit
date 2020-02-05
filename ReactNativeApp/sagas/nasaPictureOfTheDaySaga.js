import {call, put, takeEvery, select} from 'redux-saga/effects';
import moment from 'moment';

import {consoleError, consoleLog} from '../infrastructure/logging/consoleHelper';

import {getAstronomyPictureOfTheDay} from '../infrastructure/api/nasaApis';
import {GET_NASA_PICTURE_OF_THE_DAY} from '../actions/actionTypes';
import {getNasaPicOfDayDataFromState} from '../selectors/nasaPictureOfTheDaySelector';

import {
  putNasaPictureOfTheDayAction,
  putNasaPictureOfTheDayErrorAction,
  putNasaPictureOfTheDayLoadingAction,
} from '../actions/nasaPictureOfTheDay';

export function* getNASAPictureOfTheDaySaga({value}) {
  try {
    yield put(putNasaPictureOfTheDayLoadingAction(true));

    let callDate = moment();

    if (value) {
      const picOfDayData = yield select(getNasaPicOfDayDataFromState);
      callDate = picOfDayData.date ? moment(picOfDayData.date, 'YYYY-MM-DD').add(value, 'days') : moment();
    }

    yield call(consoleLog, `Calling NASA pic of day for ${callDate.format('YYYY-MM-DD')}`);

    const response = yield call(getAstronomyPictureOfTheDay, callDate.format('YYYY-MM-DD'));

    yield put(putNasaPictureOfTheDayAction(response.data));
  } catch (error) {
    yield call(consoleError, 'Error calling NASA ipc of day for...');
    yield call(consoleError, error);
    yield put(putNasaPictureOfTheDayErrorAction('Error calling NASA ipc of day'));
  } finally {
    yield put(putNasaPictureOfTheDayLoadingAction(false));
  }
}

export default function* watchNasaPictureOfDay() {
  yield takeEvery(GET_NASA_PICTURE_OF_THE_DAY, getNASAPictureOfTheDaySaga);
}
