import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as React from 'react';


function SearchNote() {
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <TextInput style={styles.searchInput} placeholder='Suchen Sie nach einer Notiz...'></TextInput>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    );
}

export default SearchNote;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    searchInput: {
      color: 'black',
      width: '95%',
      height: '5%',
      borderWidth: 1.5,
      borderRadius: 10,
      marginTop: '15%',
      fontSize: 20,
      padding: 5
    }
  });