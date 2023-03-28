import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';

/**
 * TemplateName layout component
 * @param {object} props TemplateName props of component
 * @returns render of TemplateName component
 */
const TemplateName = props => {
  return <View style={styles.TemplateName}>{props.children}</View>;
};

TemplateName.propTypes = {children: PropTypes.any.isRequired};
TemplateName.defaultProps = {};

export default TemplateName;
