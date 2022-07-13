import React from 'react';
import { ScrollView, View, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { timetable } from '../constants';
import TimetableCard from '../components/TimetableCard';
import AnimatedFlatList from './AnimatedFlatList';
import {Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
const TopNavigator = createMaterialTopTabNavigator();

const ScheduleScreen = () => {
  const today = () => {
    let d = new Date();
    const weekday = new Array('Mon', 'Tue', 'Wed', 'Thu', 'Fri');
    return weekday[d.getDay() - 1];
  };
  React.useEffect(() => {
    today();
  }, []);

  

  return (
    <TopNavigator.Navigator
      initialRouteName={today() || 'Fri'}
      tabBarOptions={{
        labelStyle: { fontSize: 15, fontWeight: 'bold' },
        activeTintColor: 'white',
        inactiveTintColor: '#0a224e',
        indicatorStyle: { backgroundColor: '#0a224e', height: '100%' },
        pressOpacity: 1,
        pressColor: '#0a224e',
      }}
    >
      {timetable.map((schedule, idx) => {
        return (
          <TopNavigator.Screen key={idx} name={schedule.title}>
            {(props) => (
              <AnimatedFlatList data = {schedule.timetable}/>
            )}
          </TopNavigator.Screen>
        );
      })}
    </TopNavigator.Navigator>
  );
};

export default ScheduleScreen;

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const LessonDetailsScreen = () => {
  return (
    <View >
      <Card elevation={10}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
    </View>
  );
}
