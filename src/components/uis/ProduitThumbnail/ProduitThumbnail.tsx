import {View, Text, Image, StyleProp, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProduitThumbnail.styles';
import IProduit from '../../../interfaces/IProduits';

/**
 * ProduitThumbnail component
 * @param {object} props ProduitThumbnail props of component
 * @returns render of ProduitThumbnail component
 */
const ProduitThumbnail = (props: {
  produit: IProduit;
  onPress?: Function;
  onLongPress?: Function;
  style?: StyleProp<View>;
}) => {
  return (
    <TouchableOpacity
      style={styles.ProduitThumbnail}
      onPress={() => {
        if (props.onPress) {
          props.onPress(props.produit);
        }
      }}
      onLongPress={() => {
        if (props.onLongPress) {
          props.onLongPress(props.produit);
        }
      }}>
      <View>
        <Text>{props.produit.name}</Text>

        <Image
          source={{uri: props.produit.image}}
          style={styles.image}
          resizeMode="center"
        />
      </View>
    </TouchableOpacity>
  );
};

ProduitThumbnail.propTypes = {
  produit: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};
ProduitThumbnail.defaultProps = {};

export default ProduitThumbnail;
