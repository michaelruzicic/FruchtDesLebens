import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as React from 'react';

function AddNote({navigation}) {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>Titel</Text>
          </View>
          <TextInput style={styles.titleInput}></TextInput>
          <View style={styles.textBox}>
            <Text style={styles.titleText}>Text</Text>
          </View>
          <TextInput style={styles.textInput} multiline></TextInput>
          <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Deine Notizen')}><Text style={styles.createButtonText}>Erstellen</Text></TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
}

export default AddNote;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    titleText: {
      color: "black",
      fontSize: 30,
      fontWeight: 'bold',
    },
    titleBox: {
      backgroundColor: 'white',
      width: '30%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15%',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 7,
    },
    textBox: {
      backgroundColor: 'white',
      width: '30%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 7,
    },
    createButton: {
      backgroundColor: '#07d100',
      height: '8%',
      width: '38%',
      borderRadius: 10,
      marginTop: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#005210',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 7,
    },
    createButtonText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    titleInput: {
      color: 'black',
      width: '90%',
      height: '5%',
      borderWidth: 2,
      borderRadius: 10,
      marginTop: '3%',
      fontSize: 20,
      padding: 4
    },
    textInput: {
      color: 'black',
      width: '90%',
      height: '30%',
      borderWidth: 2,
      borderRadius: 10,
      marginTop: '3%',
      fontSize: 20,
      padding: 4
    },
  });