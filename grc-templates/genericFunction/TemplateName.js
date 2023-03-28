import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.styles';
/**
 * initial value of templateNameState
 */
const templateNameInitialStateValue = '';
/**
 * TemplateName component
 * @param {object} props TemplateName props of component
 * @returns render of TemplateName component
 */
const TemplateName = props => {
  const [templateNameState, settemplateNameState] = useState(
    templateNameInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de templateNameState');
  }, [templateNameState]);
  useEffect(() => {
    console.log('mount de de templateName');
    return () => {
      console.log('unmount de de templateName');
    };
  }, []);
  return (
    <View style={styles.TemplateName}>
      <Text>templateName</Text>
    </View>
  );
};

TemplateName.propTypes = {};
TemplateName.defaultProps = {};

export default TemplateName;
