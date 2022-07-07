import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Screens from './navigation/Screens';
export default function App() {
  return (
   
      <Screens />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
