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
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Menu from './components/uis/Menu/Menu';
import IProduit from './interfaces/IProduits';
import Home from './pages/Home/Home';
import {setPage} from './store/navigation.slice';
import {loadProducts} from './store/produits.slice';

function App(props: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    props.changeChild(<Home produits={[{}]} />);
  }, []);
  useEffect(() => {
    console.log('===========PROPS APP CHANGE=========');
    console.log(props);
    console.log('======END PROPS APP CHANGE==========');
  }, [props]);
  return (
    <SafeAreaView style={backgroundStyle}>
      <MainLayout>
        <ScrollView style={styles.page}>
          {/* <ListProduct produits={props.produits} /> */}
          {/* <ConnectedProductEditor idproduit={1} /> */}
          {/*  produit={props.produits[0]}
            saveProduct={(newProduct: IProduit) => {
              console.log(newProduct);
            }} */}
          {undefined !== props.children && props.children}
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

export const StoreConnectedApp = (props: any) => {
  const produits = useSelector((state: any) => state.stock.produits);
  const children = useSelector((state: any) => state.navigation.component);
  const disptach = useDispatch();
  return (
    <App
      {...props}
      produits={produits}
      loadProducts={(arr: Array<IProduit>) => {
        disptach(loadProducts(arr));
      }}
      children={children}
      changeChild={(newChild: React.Component) => {
        disptach(setPage(newChild));
      }}
    />
  );
};

export default App;
