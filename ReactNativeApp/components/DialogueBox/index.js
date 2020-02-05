import React from 'react';
import {Text, Button, StyleSheet, ScrollView} from 'react-native';

function DialogueBox({title, information, closeHandler}) {
  const styles = StyleSheet.create({
    dialogueBoxHeading: {
      color: 'white',
      fontSize: 25,
      textAlign: 'center',
    },
    dialogueBoxSubHeading: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
    },
  });

  return (
    <ScrollView>
      <Text style={styles.dialogueBoxHeading}>{title}</Text>
      <Text style={styles.dialogueBoxSubHeading}>{information}</Text>
      <Button title="Ok" onPress={closeHandler} />
    </ScrollView>
  );
}

export default DialogueBox;
