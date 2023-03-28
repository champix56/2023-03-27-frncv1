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
  Button as NButton,
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log('====================================');
    console.log('Voici la nouvelle valeur de counter : ', counter);
    console.log('====================================');
    /*
    fonction de unmount des valeurs
    //return () => {
    //   effect
    // };
    */
  }, [counter]);
  useEffect(() => {
    console.log('montage du composant APP');
    return () => {
      console.log('demontage du cmp APP');
    };
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={styles.displayCounterText}>Valeur de mon compteur</Text>
        <Text style={{...styles.displayCounterText, ...styles.big}}>
          {counter}
        </Text>
      </View>
      <Button
        bgcolor="tomato"
        onPress={() => {
          setcounter(counter - 1);
          console.log(counter);
        }}>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-minus-circled-512.png',
          }}
          style={{width: 64, height: 64}}
        />
        <Text style={styles.buttonText}>Enlever</Text>
      </Button>
      <Button
        bgcolor="skyblue"
        onPress={() => {
          setcounter(counter + 1);
          console.log(counter);
        }}>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-plus-circled-256.png',
          }}
          style={{width: 64, height: 64}}
        />
        <Text style={styles.buttonText}>Ajouter</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  displayCounterText: {
    textAlign: 'center',
  },
  big: {
    fontSize: 18,
    fontWeight: '900',
  },
  buttonText: {color: 'white', fontSize: 18, fontWeight: '900'},
});

export default App;
