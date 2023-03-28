import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './Button.styles';
const Button = props => {
  //console.log(props);
  return (
    <TouchableHighlight
      style={{...styles.Button, ...props.style}}
      onPress={evt => {
        console.log(evt.target);
      }}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
