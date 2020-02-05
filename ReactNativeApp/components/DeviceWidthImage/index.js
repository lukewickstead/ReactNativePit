import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

function DeviceWidthImage({url}) {
  const win = Dimensions.get('window');
  var styles = StyleSheet.create({
    container: {
      height: win.height * 0.85,
      width: win.width,
    },
  });

  return <Image resizeMode={'contain'} source={{uri: url}} style={styles.container} />;
}

DeviceWidthImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DeviceWidthImage;
