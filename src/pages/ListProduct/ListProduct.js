import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ListProduct.styles';
import ProduitThumbnail from '../../components/uis/ProduitThumbnail/ProduitThumbnail';
import Button from '../../components/uis/Button/Button';
import buttonStyle from '../../components/uis/Button/Button.styles';

/**
 * ListProduct component
 * @param {object} props ListProduct props of component
 * @returns render of ListProduct component
 */
const ListProduct = props => {
  return (
    <>
      <View>
        <Text style={styles.listeProduitsTitle}>Produit</Text>
      </View>
      <View style={styles.ListProduct}>
        {props.produits.map(p => (
          <ProduitThumbnail produit={p} key={p.id} />
        ))}
      </View>
      <Button style={{borderRadius: undefined}}>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/snowish/128x128/actions/gtk-refresh.png',
          }}
          style={{width: 64, height: 64}}
        />
        <Text style={buttonStyle.text}>Refresh</Text>
      </Button>
    </>
  );
};

ListProduct.propTypes = {produits: PropTypes.array.isRequired};
ListProduct.defaultProps = {};

export default ListProduct;
