import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';
import {useDispatch} from 'react-redux';
import {setPage} from '../../../store/navigation.slice';
import Home from '../../../pages/Home/Home';
import ListProduct from '../../../pages/ListProduct/ListProduct';
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
  const d = useDispatch();
  //console.warn('refresh menu');
  return (
    <View style={styles.Menu}>
      <TouchableOpacity
        onPress={() => {
          d(setPage(<Home  />));
        }}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/683_home_love_heart_wedding_valentine_valentines_day_love-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          d(setPage(<ListProduct />));
        }}>
        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/customicondesign-office-shadow/256/Product-documentation.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
