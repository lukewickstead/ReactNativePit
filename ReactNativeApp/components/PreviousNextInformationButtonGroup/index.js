import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function PreviousNextInformationButtonGroup({infoHandler, nextHandler, previousHandler}) {
  const styles = StyleSheet.create({
    buttonGroup: {
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 50,
    },
  });

  return (
    <View style={styles.buttonGroup}>
      <Button color="black" title="Previous" onPress={previousHandler} />
      <Button color="black" title="Information" onPress={infoHandler} />
      <Button color="black" title="Next" onPress={nextHandler} />
    </View>
  );
}

export default PreviousNextInformationButtonGroup;
