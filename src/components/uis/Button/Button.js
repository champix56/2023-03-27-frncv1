import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './Button.styles';
const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log(evt.target);
      }}>
      <View>
        {props.children !== undefined ? (
          props.children
        ) : (
          <Text style={{...styles.text, color: props.color}}>{props.text}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
Button.defaultProps = {
  bgcolor: 'skyblue',
  color: 'white',
};
export default Button;
