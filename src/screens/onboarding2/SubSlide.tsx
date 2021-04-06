import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 44,
  },
  subtitle: {
    color: '#0C0D34',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#0C0D34',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
    textAlign: 'center',
  },
});

type Props = {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
  lastOnPress: () => void;
};

const SubSlide = ({
  subtitle,
  description,
  last,
  onPress,
  lastOnPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={last ? lastOnPress : onPress}
      />
    </View>
  );
};

export default SubSlide;
