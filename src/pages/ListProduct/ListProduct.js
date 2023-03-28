import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';
/**
 * initial value of listProductState
 */
const listProductInitialStateValue = '';
/**
 * ListProduct component
 * @param {object} props ListProduct props of component
 * @returns render of ListProduct component
 */
const ListProduct = props => {
  const [listProductState, setlistProductState] = useState(
    listProductInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de listProductState');
  }, [listProductState]);
  useEffect(() => {
    console.log('mount de de listProduct');
    return () => {
      console.log('unmount de de listProduct');
    };
  }, []);
  return (
    <View style={styles.ListProduct}>
      <Text>listProduct</Text>
    </View>
  );
};

ListProduct.propTypes = {};
ListProduct.defaultProps = {};

export default ListProduct;
