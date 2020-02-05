import moment from 'moment';
import {expect as expectChai} from 'chai';
import {call, put, select} from 'redux-saga/effects';

import {getAstronomyPictureOfTheDay} from '../../infrastructure/api/nasaApis';
import {getNASAPictureOfTheDaySaga} from '../../sagas/nasaPictureOfTheDaySaga';
import {getNasaPicOfDayDataFromState} from '../../selectors/nasaPictureOfTheDaySelector';

import {consoleLog, consoleError} from '../../infrastructure/logging/consoleHelper';

import {
  putNasaPictureOfTheDayLoadingAction,
  putNasaPictureOfTheDayErrorAction,
  putNasaPictureOfTheDayAction,
} from '../../actions/nasaPictureOfTheDay';

describe('NASA  Picture of the day saga', () => {
  it('when a successful call is made for today', () => {
    let callDate = moment().format('YYYY-MM-DD');
    const saga = getNASAPictureOfTheDaySaga({value: undefined});

    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(true)));
    expectChai(saga.next().value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
    expectChai(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
    expectChai(saga.next({data: 'test data'}).value).to.be.deep.equal(put(putNasaPictureOfTheDayAction('test data')));
    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(false)));
    expectChai(saga.next().done).to.be.true;
  });

  it('when a unsuccessful call is made for today', () => {
    let callDate = moment().format('YYYY-MM-DD');
    const saga = getNASAPictureOfTheDaySaga({value: undefined});

    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(true)));
    expectChai(saga.next().value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
    expectChai(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
    expectChai(saga.throw({error: 'test error'}).value).to.be.deep.equal(
      call(consoleError, 'Error calling NASA ipc of day for...'),
    );

    expectChai(saga.next().value).to.be.deep.equal(call(consoleError, {error: 'test error'}));
    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayErrorAction('Error calling NASA ipc of day')));
    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(false)));
    expectChai(saga.next().done).to.be.true;
  });

  it('when a successful call is made for another day', () => {
    let runDate = '2018-01-31';
    let callDate = '2018-01-30';
    const saga = getNASAPictureOfTheDaySaga({value: -1});

    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(true)));
    expectChai(saga.next().value).to.deep.equal(select(getNasaPicOfDayDataFromState));
    expectChai(saga.next({date: runDate}).value).to.deep.equal(call(consoleLog, `Calling NASA pic of day for ${callDate}`));
    expectChai(saga.next().value).to.deep.equal(call(getAstronomyPictureOfTheDay, callDate));
    expectChai(saga.next({data: 'test data'}).value).to.be.deep.equal(put(putNasaPictureOfTheDayAction('test data')));
    expectChai(saga.next().value).to.be.deep.equal(put(putNasaPictureOfTheDayLoadingAction(false)));
    expectChai(saga.next().done).to.be.true;
  });
});
