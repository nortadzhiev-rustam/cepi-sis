import React from 'react';
import { Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { timetable } from '../constants';
import TimetableCard from '../components/TimetableCard';
import { DataTable } from 'react-native-paper';

const TopNavigator = createMaterialTopTabNavigator();

const ScheduleScreen = () => {
  const today = () => {
    let d = new Date();
    const weekday = new Array('Mon', 'Tue', 'Wed', 'Thu', 'Fri');
    return weekday[d.getDay() - 1];
  };

  return (
    <TopNavigator.Navigator
      initialRouteName={today()}
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
              <DaysScreen {...props} timetable={schedule.timetable} />
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
        marginLeft: 40,
        marginVertical: 50,
      }}
    >
      <DataTable>
        <DataTable.Header
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <DataTable.Title>
            <Text style={{ fontSize: 25, fontWeight: 'bold',textTransform: 'uppercase' }}>Periods</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={{ fontSize: 25, fontWeight: 'bold', textTransform: 'uppercase'}}>Subject</Text>
          </DataTable.Title>
        </DataTable.Header>
        {timetable.map((item, idx) => {
          return (
            <DataTable.Row key={idx}>
              <DataTable.Cell>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {item.period}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {item.subject}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </ScrollView>
  );
};
