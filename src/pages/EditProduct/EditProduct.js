import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/uis/Button/Button';
// import styles from './EditProduct.styles';
/**
 * initial value of editProductState
 */
const editProductInitialStateValue = {
  name: '',
  description: '',
  prix: 0,
  stock: 0,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
};
/**
 * EditProduct component
 * @param {object} props EditProduct props of component
 * @returns render of EditProduct component
 */
const EditProduct = props => {
  const [produitState, setProduitState] = useState(
    editProductInitialStateValue,
  );
  useEffect(() => {
    setProduitState(props.produit);
  }, [props.produit]);
  return (
    <>
      <View style={styles.EditProduct}>
        <Text style={{...styles.pageTitle, ...styles.centerText}}>
          Edition produit
        </Text>
        <Text style={styles.centerText}>
          {undefined !== produitState.id
            ? `id:${produitState.id}`
            : 'Nouveau produit'}
        </Text>
        <View style={styles.mainContainer}>
          <View style={styles.leftCol}>
            <Text style={styles.valueHeader}>Titre</Text>
            <TextInput
              style={styles.valueInput}
              placeholder="saisir ici"
              value={produitState.name}
              onChangeText={textInputValue => {
                setProduitState({...produitState, name: textInputValue});
              }}
            />
            <Text style={styles.valueHeader}>Prix</Text>
            <TextInput
              style={styles.valueInput}
              placeholder="saisir ici"
              value={produitState.prix.toFixed(2)}
              onChangeText={textInputValue => {
                setProduitState({
                  ...produitState,
                  prix: Number(textInputValue),
                });
              }}
            />
            <Text style={styles.valueHeader}>Photo</Text>
            <TextInput
              style={styles.valueInput}
              placeholder="saisir ici"
              value={produitState.image}
              onChangeText={textInputValue => {
                setProduitState({...produitState, image: textInputValue});
              }}
            />
            <Text style={styles.valueHeader}>Description</Text>
            <TextInput
              style={{...styles.valueInput, ...styles.multilineInput}}
              placeholder="saisir ici"
              multiline={true}
              value={produitState.description}
              onChangeText={textInputValue => {
                setProduitState({...produitState, description: textInputValue});
              }}
            />
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.centerText}>Photo</Text>
            <Image
              resizeMode="center"
              style={styles.image}
              source={{
                uri: produitState.image,
              }}
            />
          </View>
        </View>
        <View>
          <Button text="Valider"></Button>
        </View>
      </View>
      <Text>{JSON.stringify(props)}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  EditProduct: {},
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  valueHeader: {
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    textDecorationLine: 'underline',
    fontSize: 19,
    fontWeight: '700',
  },
  valueInput: {
    fontSize: 17,
    backgroundColor: '#ACACAC',
    width: (Dimensions.get('window').width / 3) * 2,
  },
  multilineInput: {
    minHeight: 150,
    maxHeight: 500,
    verticalAlign: 'top',
  },
  leftCol: {flexGrow: 1},
  rightCol: {width: Dimensions.get('window').width / 3},
  pageTitle: {fontSize: 34, fontWeight: '900'},
  centerText: {textAlign: 'center'},
  image: {width: Dimensions.get('window').width / 3, minHeight: 64},
});
EditProduct.propTypes = {
  produit: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  saveProduct: PropTypes.func.isRequired,
};
EditProduct.defaultProps = {};

export default EditProduct;
