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
import Menu from './components/uis/Menu/Menu';
import ListProduct from './pages/ListProduct/ListProduct';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    fetch(
      'http://localhost:7956/Products',
      // 'http://my-json-server.typicode.com/champix56/frncv1-2023-03-27/Products',
    )
      .then(retour => {
        return retour.json();
      })
      .then(arr => setProduits(arr));
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <ScrollView style={styles.page}>
          {produits.map((p: any, i: number) => {
            return <Text key={`produit-${i}`}>{p.name}</Text>;
          })}
          <ListProduct />
        </ScrollView>
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
