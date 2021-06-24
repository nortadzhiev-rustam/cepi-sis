import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScheduleScreen from '../screens/ScheduleScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import AssignmentScreen from '../screens/AssignmentScreen';
import { withNavigation } from '@react-navigation/compat';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Alert, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Badge } from 'react-native-elements';
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faCalendarAlt,
  faClipboardList,
  faTasks,
  faBookReader,
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../constants/context';
import GradesScreen from './GradesScreen';
const TabScreen = createMaterialBottomTabNavigator();
const ScheduleStack = createStackNavigator();
const AttendenceStack = createStackNavigator();
const AssignmentStack = createStackNavigator();
const HomeStack = createStackNavigator();
const GradesStack = createStackNavigator();

const MainTabScreen = ({ navigation, state }) => {
  return (
    <TabScreen.Navigator
      initialRouteName='Home'
      activeColor='#FFCC00'
      barStyle={{ backgroundColor: '#0a224e' }}
    >
      <TabScreen.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={25} />
          ),
        }}
        name='Home'
        component={HomeStackScreen}
      />
      <TabScreen.Screen
        options={{
          tabBarLabel: 'Shedule',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCalendarAlt} color={color} size={25} />
          ),
        }}
        name='Schedule'
        component={ScheduleStackScreen}
      />
      <TabScreen.Screen
        options={{
          tabBarLabel: 'Attendence',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faClipboardList} color={color} size={25} />
          ),
        }}
        name='Attendence'
        component={AttendenceStackScreen}
      />
      <TabScreen.Screen
        options={{
          tabBarLabel: 'Assignment',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faTasks} color={color} size={25} />
          ),
        }}
        name='Assignment'
        component={AssignmentStackScreen}
      />
      <TabScreen.Screen
        options={{
          tabBarLabel: 'Grades',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBookReader} color={color} size={25} />
          ),
        }}
        name='Grades'
        component={GradesStackScreen}
      />
    </TabScreen.Navigator>
  );
};

export default withNavigation(MainTabScreen);

const ScheduleStackScreen = ({ navigation }) => {
  

  
    
  
    
 
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen
        options={{
          headerStyle: { backgroundColor: '#0a224e' },
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 20 }}
              onPress={() => navigation.openDrawer()}
            >
              <FontAwesomeIcon color='#FFF' size={25} icon={faBars} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => {
                  Alert.alert('No Notification');
                }}
              >
                <FontAwesomeIcon color='#FFF' size={18} icon={faBell} />
                <Badge
                  value='3' //manual value
                  status='error'
                  containerStyle={{ position: 'absolute', top: -8, right: 8 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => {
                  Alert.alert('No Email');
                }}
              >
                <FontAwesomeIcon color='#FFF' size={18} icon={faEnvelope} />
                <Badge
                  value='1' //manual value
                  status='error'
                  containerStyle={{ position: 'absolute', top: -8, right: 8 }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
        name='Schedule'
      >
        {(props) => <ScheduleScreen {...props} />}
      </ScheduleStack.Screen>
    </ScheduleStack.Navigator>
  );
};

const AttendenceStackScreen = ({ navigation }) => (
  <AttendenceStack.Navigator>
    <AttendenceStack.Screen
      options={{
        headerStyle: { backgroundColor: '#0a224e' },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          >
            <FontAwesomeIcon color='#FFF' size={25} icon={faBars} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Notification');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faBell} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Email');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faEnvelope} />
            </TouchableOpacity>
          </View>
        ),
      }}
      name='Attendence'
      component={AttendanceScreen}
    />
  </AttendenceStack.Navigator>
);

const AssignmentStackScreen = ({ navigation }) => (
  <AssignmentStack.Navigator>
    <AssignmentStack.Screen
      options={{
        headerStyle: { backgroundColor: '#0a224e' },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          >
            <FontAwesomeIcon color='#FFF' size={25} icon={faBars} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Notification');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faBell} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Email');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faEnvelope} />
            </TouchableOpacity>
          </View>
        ),
      }}
      name='Assignment'
      component={AssignmentScreen}
    />
  </AssignmentStack.Navigator>
);

const GradesStackScreen = ({ navigation }) => (
  <GradesStack.Navigator>
    <GradesStack.Screen
      options={{
        headerStyle: { backgroundColor: '#0a224e' },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          >
            <FontAwesomeIcon color='#FFF' size={25} icon={faBars} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Notification');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faBell} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => {
                Alert.alert('No Email');
              }}
            >
              <FontAwesomeIcon color='#FFF' size={18} icon={faEnvelope} />
            </TouchableOpacity>
          </View>
        ),
      }}
      name='Grades'
      component={GradesScreen}
    />
  </GradesStack.Navigator>
);

const HomeStackScreen = ({ navigation, state }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        options={{
          headerStyle: {
            backgroundColor: '#0a224e',
          },
          headerTitleStyle: {
            color: '#FFF',

            fontSize: 20,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 20 }}
              onPress={() => navigation.openDrawer()}
            >
              <FontAwesomeIcon color='#FFF' size={25} icon={faBars} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => {
                  Alert.alert('No Notification');
                }}
              >
                <FontAwesomeIcon color='#FFF' size={18} icon={faBell} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => {
                  Alert.alert('No Email');
                }}
              >
                <FontAwesomeIcon color='#FFF' size={18} icon={faEnvelope} />
              </TouchableOpacity>
            </View>
          ),
        }}
      >
        {(props) => <HomeScreen {...props} state={state} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
