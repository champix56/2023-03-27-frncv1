import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Produit.styles';

/**
 * Produit component
 * @param {object} props Produit props of component
 * @returns render of Produit component
 */
const Produit = props => {
  return (
    <View style={styles.Produit}>
      <View style={styles.headerVIew}>
        <Text style={styles.header}>produit</Text>
      </View>
      <Text style={styles.productName}>{props.produit.name}</Text>
      <View style={styles.productMainContainer2cols}>
        <View style={styles.productMainContainerLeftcol}>
          <View>
            <Text style={styles.produitValueHeader}>Prix </Text>
          </View>
          <View>
            <Text style={{...styles.produitValue, ...styles.big}}>
              {props.produit.prix}
            </Text>
          </View>
          <View>
            <Text style={styles.produitValueHeader}>Description </Text>
          </View>
          <View>
            <Text style={{...styles.produitValue}}>
              {props.produit.description}
            </Text>
          </View>
        </View>
        <View style={styles.productMainContainerRightcol}>
          <View>
            <Text>Img</Text>
          </View>
          <Image
            style={styles.productImageThumb}
            source={{uri: props.produit.image}}
          />
        </View>
      </View>
    </View>
  );
};

Produit.propTypes = {produit: PropTypes.object.isRequired};
Produit.defaultProps = {};

export default Produit;
