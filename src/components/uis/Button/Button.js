import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight} from 'react-native';
import styles from './Button.styles';
const Button = props => {
  //console.log(props);
  return (
    <TouchableHighlight
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log(evt.target);
      }}>
      <Text style={{...styles.text, color: props.color}}>{props.text}</Text>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Button;
