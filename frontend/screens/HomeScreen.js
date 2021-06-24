import React from 'react';
import { View, StatusBar, ScrollView, Text } from 'react-native';
import Card from '../components/Card';
import { sections } from '../constants/';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as Animatable from 'react-native-animatable';

const HomeScreen = (props) => {
  // React.useEffect(() => {
  //   console.log(props.state)
  // }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}
    >
      <StatusBar barStyle='light-content' backgroundColor='#0a224e' />
      <Animatable.View
        style={{
          marginTop: 100,
        }}
        animation='fadeInUpBig'
      >
        {sections.map((section, idx) => {
          return <Card key={idx} item={section} title={section.title} />;
        })}

        
      </Animatable.View>
    </ScrollView>
  );
};

export default HomeScreen;
