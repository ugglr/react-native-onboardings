import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import AuthScreen from './src/screens/auth/AuthScreen';
import Walkthrough from './src/screens/onboarding1/Walkthrough';

import Onboarding2 from './src/screens/onboarding2/Onboarding';
import Welcome from './src/screens/onboarding2/Welcome';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log('isDarkMode', isDarkMode);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding2}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
