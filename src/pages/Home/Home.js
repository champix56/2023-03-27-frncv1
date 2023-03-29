import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ProduitThumbnail from '../../components/uis/ProduitThumbnail/ProduitThumbnail';

/**
 * Home component
 * @param {object} props Home props of component
 * @returns render of Home component
 */
const Home = props => {
  let randVal = Math.floor(Math.random() * props.produits.length);
  return (
    <View style={styles.Home}>
      <View>
        <Text style={styles.homeTitle}>Bienvenue</Text>
      </View>
      <View>
        <Text style={styles.header}>Produit à la une</Text>
      </View>
      <View style={styles.containerMiddle}>
        {props.produits.length > 0 && (
          <ProduitThumbnail produit={props.produits[randVal]} />
        )}
      </View>
    </View>
  );
};

Home.propTypes = {produits: PropTypes.array.isRequired};
Home.defaultProps = {};
const styles = StyleSheet.create({
  Home: {flexGrow: 1},
  homeTitle: {
    fontSize: 55,
    fontWeight: '900',
    marginTop: 45,
    marginBottom: 70,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 21,
    fontStyle: 'italic',
  },
  containerMiddle: {
    alignItems: 'center',
  },
});
export default Home;
