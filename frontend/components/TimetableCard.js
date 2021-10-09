import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform, Dimensions
} from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const TimetableCard = (props) => {
  return (
    <View style={styles.cardView}>
      <TouchableWithoutFeedback style={styles.touchableView}>
        <View style={styles.buttonView}>
          <View style={styles.iconView}>
            <Text
              style={{
                color: 'white',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
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
    width: Platform.OS === 'web' ? 1000 : '90%',
    backgroundColor: '#FFF',
    maxHeight: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
    elevation: 10,
    borderColor: '#0a224e',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 0,
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
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
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
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    textTransform: 'uppercase',
  },
});
