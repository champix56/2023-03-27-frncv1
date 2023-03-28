import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './Button.styles';
interface IButtonProps {
  style?: object;
  bgcolor?: string;
  color?: string;
  text?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
  onPress?: Function;
}
const Button: React.FC<IButtonProps> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={{...styles.Button, ...props.style, backgroundColor: props.bgcolor}}
      onPress={evt => {
        console.log(evt.target);
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <View style={styles.mainView}>
        {undefined !== props.children ? (
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
  onPress: PropTypes.func,
};
Button.defaultProps = {
  bgcolor: 'skyblue',
  color: 'white',
};
export default Button;
