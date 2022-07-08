import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { withNavigation } from '@react-navigation/compat';
import {LinearGradient} from 'expo-linear-gradient';

const Card = (props) => {
  return (
    <View style={styles.cardView}>
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
    width: Platform.isPad ? '80%' : 350,
    backgroundColor: '#ced4da',
    maxHeight: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
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
    height: Platform.isPad ? 100 : 85,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { fontSize: 25, 
    fontWeight: 'bold', 
    marginLeft: 20,
  textTransform: 'uppercase' }
});
