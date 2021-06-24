import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    TouchableHighlight,
  } from 'react-native';
  import * as Animatable from 'react-native-animatable';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import { useTheme } from '@react-navigation/native';

const WelcomeScreen = ({navigation}) => {

  // useEffect(() => {
  //   setTimeout(() => {navigation.navigate('Sign in')}, 5000)
  // },[]) ;

    const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#0a224e' barStyle='light-content' />
      <View style={styles.header}>
        <Animatable.Image
          animation='fadeInDown'
          duraton='1500'
          source={require('../assets/img/CEPI-Logo-Golden.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation='fadeInUpBig'
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Stay connected with everyone!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity >
            <TouchableHighlight
            onPress={() => navigation.navigate('Sign in')}
              colors={'#0a224e'}
              style={styles.signIn}
            >
              <>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name='navigate-next' color='#fff' size={20} />
              </>
            </TouchableHighlight>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
    )
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0a224e',
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    logo: {
      width: 300,
      height: 300,
    },
    title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
    },
    text: {
      color: 'grey',
      marginTop: 5,
    },
    button: {
      alignItems: 'flex-end',
      marginTop: 30,
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor: '#0a224e'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold',
    },
  });