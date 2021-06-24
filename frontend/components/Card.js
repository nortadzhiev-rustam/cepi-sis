import React from 'react';
import {
  Text,
  View,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { withNavigation } from '@react-navigation/compat';
import {LinearGradient} from 'expo-linear-gradient';

const Card = (props) => {
  return (
    <View animation='fadeInUpBig' style={styles.cardView}>
      <TouchableWithoutFeedback
        style={styles.touchableView}
        onPress={() => props.navigation.navigate(props.item.title)}
      >
        <View style={styles.buttonView}>
          <View style={styles.iconView}>
          
          <FontAwesomeIcon color='#FFCC00' size={50} icon={props.item.icon} />
          
            
          </View>

          <Text style={styles.textStyle}>
            {props.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default withNavigation(Card);

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    width: Platform.OS === 'web' ? 400 : 300,
    backgroundColor: '#ced4da',
    maxHeight: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    elevation: 20,
    borderColor: '#0a224e',
    borderWidth: 5,
  },
  touchableView: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconView: {
    backgroundColor: '#0a224e',
    maxWidth: 100,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { fontSize: 30, 
    fontWeight: 'bold', 
    marginLeft: 20 }
});
