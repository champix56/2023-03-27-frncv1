import {View, Text, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.styles';

/**
 * Menu component
 * @param {object} props Menu props of component
 * @returns render of Menu component
 */
const Menu = props => {
  return (
    <View style={styles.Menu}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/683_home_love_heart_wedding_valentine_valentines_day_love-256.png',
          }}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
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
