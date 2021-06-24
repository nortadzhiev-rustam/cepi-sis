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
import { LinearGradient } from 'expo-linear-gradient';

const TimetableCard = (props) => {
  return (
    <View style={styles.cardView}>
      <TouchableWithoutFeedback style={styles.touchableView}>
        <View style={styles.buttonView}>
          <View style={styles.iconView}>
            <Text
              style={{
                flex: 1,
                color: 'white',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                textAlign: 'center'
              }}
            >
              {props.period}
            </Text>
          </View>
          <Text style={styles.textStyle}>{props.subject}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default withNavigation(TimetableCard);

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 10,
    width: '90%',
    backgroundColor: '#ced4da',
    maxHeight: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    elevation: 10,
    borderColor: '#0a224e',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
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
    height: 60,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { fontSize: 25, fontWeight: 'bold', marginLeft: 20, textTransform: 'uppercase' },
});
