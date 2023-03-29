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

  return (
    <>
      <View style={styles.EditProduct}>
        <Text style={{...styles.pageTitle, ...styles.centerText}}>
          Edition produit
        </Text>
        <Text style={styles.centerText}>id:XX</Text>
        <View style={styles.mainContainer}>
          <View style={styles.leftCol}>
            <Text style={styles.valueHeader}>Titre</Text>
            <TextInput style={styles.valueInput} placeholder="saisir ici" />
            <Text style={styles.valueHeader}>Prix</Text>
            <TextInput style={styles.valueInput} placeholder="saisir ici" />
            <Text style={styles.valueHeader}>Photo</Text>
            <TextInput style={styles.valueInput} placeholder="saisir ici" />
            <Text style={styles.valueHeader}>Description</Text>
            <TextInput
              style={{...styles.valueInput, ...styles.multilineInput}}
              placeholder="saisir ici"
              multiline={true}
            />
          </View>
          <View style={styles.rightCol}>
            <Text style={styles.centerText}>Photo</Text>
            <Image
              resizeMode="center"
              style={styles.image}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
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
  valueInput: {fontSize: 17, backgroundColor: '#ACACAC', width: '100%'},
  multilineInput: {
    minHeight: 150,
  },
  leftCol: {flexGrow: 1},
  rightCol: {width: Dimensions.get('window').width / 3},
  pageTitle: {fontSize: 34, fontWeight: '900'},
  centerText: {textAlign: 'center'},
  image: {width: Dimensions.get('window').width / 3, minHeight: 64},
});
EditProduct.propTypes = {};
EditProduct.defaultProps = {};

export default EditProduct;
