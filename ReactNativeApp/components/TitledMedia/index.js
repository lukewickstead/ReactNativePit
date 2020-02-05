import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import DeviceWidthImage from '../DeviceWidthImage';
import DeviceWidthVideo from '../DeviceWidthVideo';

function PolaroidImage({date, mediaType, title, url}) {
  return (
    <View>
      {mediaType === 'image' && <DeviceWidthImage url={url} />}
      {mediaType === 'video' && <DeviceWidthVideo url={url} />}
      <Text>
        {date} - {title}
      </Text>
    </View>
  );
}

PolaroidImage.propTypes = {
  date: PropTypes.string.isRequired,
  hdurl: PropTypes.string,
  mediaType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PolaroidImage;
