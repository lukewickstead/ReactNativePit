import {expect as chaiExpect} from 'chai';

import nasaPictureOfTheDayReducer, {initialState} from '../../reducers/nasaPictureOfTheDay';

import {
  putNasaPictureOfTheDayAction,
  putNasaPictureOfTheDayErrorAction,
  putNasaPictureOfTheDayLoadingAction,
  putDisplayNasaPictureOfTheDayExplanationAction,
} from '../../actions/nasaPictureOfTheDay';

describe('NASA picture of the day reducer ', () => {
  it('should return the initial state', () => {
    chaiExpect(nasaPictureOfTheDayReducer(undefined, {})).deep.equal(initialState);
  });

  it('should reduce PUT_NASA_PICTURE_OF_THE_DAY', () => {
    chaiExpect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDayAction('TestAPIData'))).deep.equal({data: 'TestAPIData'});
  });

  it('should reduce PUT_NASA_PICTURE_OF_THE_DAY_ERROR', () => {
    chaiExpect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDayErrorAction('TestError'))).deep.equal({error: 'TestError'});
  });

  it('should reduce PUT_NASA_PICTURE_OF_THE_DAY_LOADING', () => {
    chaiExpect(nasaPictureOfTheDayReducer({}, putNasaPictureOfTheDayLoadingAction(true))).deep.equal({isLoading: true});
  });

  it('should reduce PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION', () => {
    chaiExpect(nasaPictureOfTheDayReducer({}, putDisplayNasaPictureOfTheDayExplanationAction(true))).deep.equal({
      displayExplanation: true,
    });
  });
});
