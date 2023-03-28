import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';
/**
 * initial value of menuState
 */
const menuInitialStateValue = '';
/**
 * Menu component
 * @param {object} props Menu props of component
 * @returns render of Menu component
 */
const Menu = props => {
  const [menuState, setmenuState] = useState(
    menuInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de menuState');
  }, [menuState]);
  useEffect(() => {
    console.log('mount de de menu');
    return () => {
      console.log('unmount de de menu');
    };
  }, []);
  return (
    <View style={styles.Menu}>
      <Text>menu</Text>
    </View>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
