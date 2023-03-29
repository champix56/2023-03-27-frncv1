/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Produit from './components/uis/Produit/Produit';
import Menu from './components/uis/Menu/Menu';
import ListProduct from './pages/ListProduct/ListProduct';
import ProduitThumbnail from './components/uis/ProduitThumbnail/ProduitThumbnail';
import Home from './pages/Home/Home';
import IProduit from './interfaces/IProduits';
const initialProduitsState: Array<IProduit> = [];
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [produits, setProduits] = useState(initialProduitsState);
  useEffect(() => {
    fetch('http://localhost:7956/Products')
      .then(retour => {
        return retour.json();
      })
      .then(arr => {
        console.log(arr);
        return setProduits(arr);
      });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <Home produits={produits} />
        {/* <ScrollView style={styles.page}>
          <ListProduct produits={produits} />
        </ScrollView> */}
        <Menu />
      </MainLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
  },
});

export default App;
