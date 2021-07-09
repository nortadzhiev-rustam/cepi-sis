import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import Card from '../components/Card';
import { sections } from '../constants/';

const HomeScreen = () => {
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
      <View
        style={{
          marginTop: 100,
        }}
      >
        {sections.map((section, idx) => {
          return <Card key={idx} item={section} title={section.title} />;
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
