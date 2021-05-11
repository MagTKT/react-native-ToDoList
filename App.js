import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './components/AddButton';
import colors from './colors';


export default function App() {
  return (
  
    <View style={styles.container}>
      <Text style={styles.font}>Bienvenue dans ta To Do List</Text>
      <AddButton />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{ 
    fontSize: 23, 
    color: colors.gold, 
    textAlign: 'center' 
  }
  
});
