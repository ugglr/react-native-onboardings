import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

type WelcomeProps = {};

const Welcome = ({navigation}: WelcomeProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Button label="button 1" />
      <Button
        label="button 2"
        variant="primary"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Welcome;
