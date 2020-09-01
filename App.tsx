import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import Routes from './src/routes/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Cinzel_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}