import React from 'react';
import {Text, Button, StyleSheet, ScrollView} from 'react-native';

function DialogueBox({title, information, closeHandler}) {
  const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center',
    },
    information: {
      color: 'white',
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 25,
      paddingTop: 25,
    },
  });

  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.information}>{information}</Text>
      <Button title="Ok" onPress={closeHandler} color="darkGray" />
    </ScrollView>
  );
}

export default DialogueBox;
