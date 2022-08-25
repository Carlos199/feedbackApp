import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import  Widget  from './src/components/Widget';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null
  }
  return (
    <View style={{
      flex:1,
      backgroundColor: theme.colors.background
  }}
    onLayout={onLayoutRootView}
  >
     
   <StatusBar 
   style='light'
   backgroundColor='transparent'
   translucent
  />

    <Widget />
    </View>
  );
}

