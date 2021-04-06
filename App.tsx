import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Walkthrough from './src/screens/onboarding1/Walkthrough';

import Onboarding2 from './src/screens/onboarding2/Onboarding';
import Welcome from './src/screens/onboarding2/Welcome';
import AuthScreen from './src/screens/auth/AuthScreen';

const Stack = createStackNavigator();

const App = () => {
  // TODO: Implement darkmode
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
