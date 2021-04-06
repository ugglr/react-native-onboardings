import React from 'react';
import {StyleSheet, Animated} from 'react-native';

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#2CB9B0',
    borderRadius: 4,
    height: 8,
    margin: 4,
    marginBottom: 28,
    width: 8,
  },
});

type DotProps = {
  index: number;
  currentIndex: Animated.Value;
};

const Dot = ({index, currentIndex}: DotProps): React.ReactElement => {
  const opacity = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });
  const scale = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.dot, {opacity, transform: [{scale}]}]} />
  );
};

export default Dot;
