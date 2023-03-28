/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Button as NButton,
  Text,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button bgcolor="tomato" color="green" style={{borderRadius: 64}}>
        <Image
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/colourful-education/250/brain-256.png',
          }}
          style={{width: 32, height: 32}}
        />
        <Text>Cliquez ici</Text>
      </Button>
      <Button>
        <Text>Button 1</Text>
      </Button>
      <Button children="Button3" />
      <Button text="Button by text" />
      <Button
        children={[
          <Image
            source={{
              uri: 'https://cdn0.iconfinder.com/data/icons/colourful-education/250/brain-256.png',
            }}
          />,
          <Text>Cliquez MOI!!</Text>,
        ]}
      />
      <NButton title="Button natif RN" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
