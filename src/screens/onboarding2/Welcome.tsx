import React from 'react';
import {Text, View} from 'react-native';

type WelcomeProps = {};

const Welcome = ({}: WelcomeProps): React.ReactElement => {
  return (
    <View>
      <Text>Welcome!</Text>
    </View>
  );
};

export default Welcome;
