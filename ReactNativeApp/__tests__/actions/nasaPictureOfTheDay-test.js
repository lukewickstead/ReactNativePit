import {expect as chaiExpect} from 'chai';

import {
  GET_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY,
  PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
  PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
  PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION,
} from '../../actions/actionTypes';

import {
  getNasaPictureOfTheDayAction,
  putNasaPictureOfTheDayAction,
  putNasaPictureOfTheDayErrorAction,
  putNasaPictureOfTheDayLoadingAction,
  putDisplayNasaPictureOfTheDayExplanationAction,
} from '../../actions/nasaPictureOfTheDay';

describe('NASA Picture of the day actions', () => {
  describe('getNasaPictureOfTheDay', () => {
    it('should return GET_NASA_PICTURE_OF_THE_DAY with value', () => {
      chaiExpect(getNasaPictureOfTheDayAction('TEST VALUE')).to.deep.equal({
        type: GET_NASA_PICTURE_OF_THE_DAY,
        value: 'TEST VALUE',
      });
    });
  });

  describe('putNasaPictureOfTheDay', () => {
    it('should return PUT_NASA_PICTURE_OF_THE_DAY with value', () => {
      chaiExpect(putNasaPictureOfTheDayAction('TEST VALUE')).to.deep.equal({
        type: PUT_NASA_PICTURE_OF_THE_DAY,
        value: 'TEST VALUE',
      });
    });
  });

  describe('putNasaPictureOfTheDayError', () => {
    it('should return PUT_NASA_PICTURE_OF_THE_DAY_ERROR with value', () => {
      chaiExpect(putNasaPictureOfTheDayErrorAction('TEST VALUE')).to.deep.equal({
        type: PUT_NASA_PICTURE_OF_THE_DAY_ERROR,
        value: 'TEST VALUE',
      });
    });
  });

  describe('putNasaPictureOfTheDayLoading', () => {
    it('should return PUT_NASA_PICTURE_OF_THE_DAY_LOADING with value', () => {
      chaiExpect(putNasaPictureOfTheDayLoadingAction('TEST VALUE')).to.deep.equal({
        type: PUT_NASA_PICTURE_OF_THE_DAY_LOADING,
        value: 'TEST VALUE',
      });
    });
  });

  describe('putDisplayNasaPictureOfTheDayExplanationAction', () => {
    it('should return PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION with value', () => {
      chaiExpect(putDisplayNasaPictureOfTheDayExplanationAction('TEST VALUE')).to.deep.equal({
        type: PUT_DISPLAY_NASA_PICTURE_OF_THE_DAY_EXPLANATION,
        value: 'TEST VALUE',
      });
    });
  });
});
