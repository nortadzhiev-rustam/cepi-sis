import React from 'react';
import { ScrollView, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { timetable } from '../constants';
import TimetableCard from '../components/TimetableCard';
import AnimatedFlatList from './animatedFlatList';

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
              <AnimatedFlatList />
            )}
          </TopNavigator.Screen>
        );
      })}
    </TopNavigator.Navigator>
  );
};

export default ScheduleScreen;

const DaysScreen = ({ timetable }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {timetable.map((item, idx) => {
          return (
            <TimetableCard
              key={idx}
              period={item.period}
              subject={item.subject}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
