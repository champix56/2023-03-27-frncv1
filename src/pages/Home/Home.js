import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ProduitThumbnail from '../../components/uis/ProduitThumbnail/ProduitThumbnail';
import Button from '../../components/uis/Button/Button';
import {useSelector} from 'react-redux'
/**
 * Home component
 * @param {object} props Home props of component
 * @returns render of Home component
 */
const Home = props => {
  const [selectedPosition, setselectedPosition] = useState(0);
  // useEffect(() => {
  //   const intervalRefresProduit = setInterval(() => {
  //     setselectedPosition(Math.floor(Math.random() * props.produits.length));
  //     ToastAndroid.show('!! pensez à émarger !!', ToastAndroid.SHORT);
  //   }, 4000);
  //   return () => {
  //     clearInterval(intervalRefresProduit);
  //   };
  // }, []);
  //  let randVal = Math.floor(Math.random() * props.produits.length);
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
          <ProduitThumbnail
            style={styles.roundVignette}
            produit={props.produits[selectedPosition]}
          />
        )}
      </View>
      <View style={styles.constrainedButtonContainer}>
        <Button text="liste produits" />
        <Button text="Nouveau produit" bgcolor="aquamarine" />
      </View>
    </View>
  );
};

export default function ConnectedHome() {
  const p = useSelector(state => state.stock.produits);

  return <Home produits={p} />;
}

Home.propTypes = {produits: PropTypes.array.isRequired};
Home.defaultProps = {};
const styles = StyleSheet.create({
  Home: {flexGrow: 1},
  homeTitle: {
    fontSize: 55,
    fontWeight: '900',
    marginTop: 45,
    marginBottom: 50,
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
  constrainedButtonContainer: {
    marginTop: 65,
    paddingHorizontal: '25%',
  },
  roundVignette: {
    borderRadius: 115,
    width: 230,
    height: 230,
    backgroundColor: '#FEFEFE',
    paddingVertical: 20,
  },
});
//export default Home;
