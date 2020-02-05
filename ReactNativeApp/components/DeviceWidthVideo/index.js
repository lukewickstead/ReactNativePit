import PropTypes from 'prop-types';
import React from 'react';
import {Text, StyleSheet} from 'react-native';

function DeviceWidthVideo({url}) {
  var styles = StyleSheet.create({
    noVideo: {
      color: 'white',
      textAlign: 'center',
    },
  });

  return <Text style={styles.noVideo}>Videos are currently not supported</Text>;
}

DeviceWidthVideo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DeviceWidthVideo;
