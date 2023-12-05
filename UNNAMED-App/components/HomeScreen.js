import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

function HomeScreen({navigation}) {

    return (
      <View style={styles.container}>
        <View style={styles.notesContainer}>
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>Test</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notiz editieren')}>
              <MaterialIcons name="edit" style={styles.editButton} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="delete" style={styles.deleteButton} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Notiz erstellen')}><AntDesign name="plus" style={styles.plusIcon} /></TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Suche')}>
            <FontAwesome name="search" style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    notesContainer: {
      width: '95%',
      //backgroundColor: '#c6c5c8',
      height: '75%',
      marginTop: '2%',
      alignItems: 'center',
      marginTop: '13%'
    },
    buttonContainer: {
      width: '95%',
      //backgroundColor: '#c6c5c8',
      height: '15%',
      marginTop: '3%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    addButton: {
      backgroundColor: '#90ed8a',
      height: '78%',
      width: '27%',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '25%',
      shadowColor: '#005210',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 7,
    },
    searchButton: {
      backgroundColor: '#8ae3ed',
      height: '45%',
      width: '16%',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#005c70',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 7,
    },
    deleteButton: {
      fontSize: 35,
      color: 'red',
      marginRight: 10
    },
    editButton: {
      fontSize: 35,
      color: '#ffe95c',
      marginLeft: 220
    },
    plusIcon: {
      fontSize: 90,
      color: 'white',
    },
    searchIcon: {
      fontSize: 25,
      color: 'white'
    },
    noteBox: {
      backgroundColor: 'white',
      width: '98%',
      height: '15%',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 7,
      marginTop: '3%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    noteText: {
      fontSize: 25,
      color: 'black',
      marginLeft: 10
    },
  });