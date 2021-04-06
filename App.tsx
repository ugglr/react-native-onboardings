import React from 'react';
import {useColorScheme} from 'react-native';

import AuthScreen from './src/screens/auth/AuthScreen';
import Walkthrough from './src/screens/onboarding1/Walkthrough';

import Onboarding2 from './src/screens/onboarding2/Onboarding';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log('isDarkMode', isDarkMode);

  return <Onboarding2 />;
};

export default App;
