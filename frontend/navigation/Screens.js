import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import { AuthContext } from '../constants/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Alert, TouchableOpacity, View } from 'react-native';
import MainTabScreen from '../screens/MainTabScreen';
import { DrawerContent } from '../components/DrawerContent';
import SettingsScreen from '../screens/SettingsScreen';
import { users } from '../constants/';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const SettingsStack = createStackNavigator();
const Screens = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            username: action.username,
            userType: action.userType,
            firstName: action.firstName,
            lastName: action.lastName,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            username: action.username,
            userType: action.userType,
            firstName: action.firstName,
            lastName: action.lastName,
            isSignout: false,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            username: null,
            userType: null,
            isSignout: true,
            userToken: null,
            firstName: null,
            lastName: null,
            
          };
      }
    },
    {
      username: null,
      userType: null,
      isLoading: true,
      isSignout: true,
      userToken: null,
      firstName: null,
      lastName: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let username;
      let userType;
      let firstName;
      let lastName;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        username = await AsyncStorage.getItem('username');
        userType = await AsyncStorage.getItem('userType');
        firstName = await AsyncStorage.getItem('firstName');
        lastName = await AsyncStorage.getItem('lastName');
      } catch (e) {
        console.log('Error: ', e)
      }

     
      dispatch({
        type: 'RESTORE_TOKEN',
        token: userToken,
        username: username,
        userType: userType,
        firstName: firstName,
        lastName: lastName,
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        let userToken = String(data.userToken);
        let username = String(data.username);
        let userType = String(data.userType);
        let firstName = String(data.fname);
        let lastName = String(data.lname);

        try {
          await AsyncStorage.multiSet([
            ['userToken', userToken],
            ['username', username],
            ['userType', userType],
            ['lastName', lastName],
            ['firstName', firstName],
          ]);
        } catch (e) {
          console.log(e);
        }

        dispatch({
          type: 'SIGN_IN',
          username: username,
          token: userToken,
          userType: userType,
          lastName: lastName,
          firstName: firstName,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.multiRemove(['userToken', 'username', 'userType', 'firstName', 'lastName']);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

 

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken === null ||
        state.userToken === undefined ||
        state.userToken === '' ? (
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Welcome Screen'>
              {(props) => <WelcomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name='Sign in'>
              {(props) => <SigninScreen {...props} users={users} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            drawerType='slide'
            drawerContent={(props) => (
              <DrawerContent {...props} firstName={state.firstName} lastName={state.lastName} />
            )}
          >
            <Drawer.Screen name='Main'>
              {(props) => <MainTabScreen {...props} state={state} />}
            </Drawer.Screen>
            <Drawer.Screen name='Settings'>
              {(props) => <SettingsStackScreen {...props} state={state} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Screens;

const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
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
      name='Settings'
    >
      {(props) => <SettingsScreen {...props} />}
    </SettingsStack.Screen>
  </SettingsStack.Navigator>
);
