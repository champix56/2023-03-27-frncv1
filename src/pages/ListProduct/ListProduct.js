import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';
import ProduitThumbnail from '../../components/uis/ProduitThumbnail/ProduitThumbnail';

/**
 * ListProduct component
 * @param {object} props ListProduct props of component
 * @returns render of ListProduct component
 */
const ListProduct = props => {
  return (
    <View style={styles.ListProduct}>
      <Text style={styles.title}>liste de produits</Text>
      <View style={styles.scview}>
        {props.produits.map((p, i) => (
          <ProduitThumbnail produit={p} key={`p${i}`} />
        ))}
      </View>
    </View>
  );
};

ListProduct.propTypes = {produits: PropTypes.array.isRequired};
ListProduct.defaultProps = {};

export default ListProduct;
