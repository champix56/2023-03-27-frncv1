/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme, Button as NButton} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/uis/Button/Button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button text="Content" />
      <Button text="Button2" />
      <Button text="Button3" />
      <NButton title="Hello world"></NButton>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
