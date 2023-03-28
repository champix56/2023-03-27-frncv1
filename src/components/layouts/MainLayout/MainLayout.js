import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.styles';

/**
 * MainLayout layout component
 * @param {object} props MainLayout props of component
 * @returns render of MainLayout component
 */
const MainLayout = props => {
  return <View style={styles.MainLayout}>{props.children}</View>;
};

MainLayout.propTypes = {children: PropTypes.any.isRequired};
MainLayout.defaultProps = {};

export default MainLayout;
