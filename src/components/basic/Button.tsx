import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import * as colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.brown,
    borderRadius: 24,
    justifyContent: 'center',
    height: 48,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

type Props = {
  title: string;
  type?: 'primary' | 'secondary' | undefined;
  onPress: () => void;
};

const defaultProps = {
  type: 'primary',
};

const Button = ({type, title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = defaultProps;

export default Button;
