import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoList from './src/screens/CryptoList/CryptoList';
import AddCrypto from './src/screens/AddCrypto/AddCrypto';
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='CryptoTraker Pro' 
          component={CryptoList}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name='AddCrypto' 
          component={AddCrypto}
          options={
            {
              title: 'Back to list',
              headerBackTitle:"Back to list",
              headerTitleStyle:{
                color:'#385775'
              }
            }
          }
            
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;