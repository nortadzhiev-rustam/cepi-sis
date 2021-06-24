import React from 'react';
import { View, Text, Button } from 'react-native';
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SettingsScreen;
