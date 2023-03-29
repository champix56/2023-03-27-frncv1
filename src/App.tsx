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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Menu from './components/uis/Menu/Menu';
import IProduit from './interfaces/IProduits';
import ListProduct from './pages/ListProduct/ListProduct';
import {loadProducts} from './store/produits.slice';
import {store} from './store/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const produits: Array<IProduit> = [];
  // const [produits, setProduits] = useState([]);
  useEffect(() => {
    fetch(
      'http://localhost:7956/Products',
      // 'http://my-json-server.typicode.com/champix56/frncv1-2023-03-27/Products',
    )
      .then(retour => {
        return retour.json();
      })
      .then(arr => {
        // setProduits(arr);
        store.dispatch({type: loadProducts, payload: arr});
      });
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <ScrollView style={styles.page}>
          <ListProduct produits={produits} />
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

function mapStateToProps(ownProps: any, storeState: any) {
  return {...ownProps, produits: storeState.produits};
}
function mapDispatchToProps(dispatch: Function) {
  return {
    lodProducts: (produits: Aray<IProduit>) => {
      dispatch({type: loadProducts, payload: produits});
    },
  };
}
export const StoreConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
export default App;
