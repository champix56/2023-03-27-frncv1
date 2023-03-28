import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './EditProduct.styles';
/**
 * initial value of editProductState
 */
const editProductInitialStateValue = '';
/**
 * EditProduct component
 * @param {object} props EditProduct props of component
 * @returns render of EditProduct component
 */
const EditProduct = props => {
  const [editProductState, seteditProductState] = useState(
    editProductInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de editProductState');
  }, [editProductState]);
  useEffect(() => {
    console.log('mount de de editProduct');
    return () => {
      console.log('unmount de de editProduct');
    };
  }, []);
  return (
    <View style={styles.EditProduct}>
      <Text>editProduct</Text>
    </View>
  );
};

EditProduct.propTypes = {};
EditProduct.defaultProps = {};

export default EditProduct;
