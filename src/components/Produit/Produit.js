import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Produit.styles';
/**
 * initial value of produitState
 */
const produitInitialStateValue = '';
/**
 * Produit component
 * @param {object} props Produit props of component
 * @returns render of Produit component
 */
const Produit = props => {
  const [produitState, setproduitState] = useState(
    produitInitialStateValue,
  );
  useEffect(() => {
    console.log('update/mount de de produitState');
  }, [produitState]);
  useEffect(() => {
    console.log('mount de de produit');
    return () => {
      console.log('unmount de de produit');
    };
  }, []);
  return (
    <View style={styles.Produit}>
      <Text>produit</Text>
    </View>
  );
};

Produit.propTypes = {};
Produit.defaultProps = {};

export default Produit;
