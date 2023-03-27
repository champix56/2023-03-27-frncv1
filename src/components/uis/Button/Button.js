import React from 'react';
import {Text, View} from 'react-native';
import styles from './Button.styles';
const Button = props => {
  //console.log(props);
  return (
    <View style={styles.Button}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default Button;
