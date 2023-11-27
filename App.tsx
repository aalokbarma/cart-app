/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from './src/Navigation';
import SplashScreen from 'react-native-splash-screen'

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  SplashScreen.hide();

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  }
});

export default App;
