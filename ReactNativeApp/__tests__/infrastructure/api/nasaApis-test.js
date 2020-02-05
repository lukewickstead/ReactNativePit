import axios from 'axios';
import {expect as chaiExpect} from 'chai';

import {getAstronomyPictureOfTheDay} from '../../../infrastructure/api/nasaApis';

jest.mock('axios');

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('When calling api', () => {
  describe('When calling getAstronomyPictureOfTheDay', () => {
    it('should be called with the right arguments', () => {
      getAstronomyPictureOfTheDay('TEST DATE');

      expect(axios.get).toHaveBeenCalledTimes(1);
      chaiExpect(axios.get.mock.calls[0][0]).to.equal(
        'https://api.nasa.gov/planetary/apod?api_key=CeJ9zuuspOQx0OLbP6xVZRElindbAoXdfYSyDWpx&date=TEST DATE',
      );
    });
  });
});
