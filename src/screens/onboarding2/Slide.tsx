import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as responsive from '../../responsive';

const styles = StyleSheet.create({
  container: {
    width: responsive.screenWidth,
    justifyContent: 'center',
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: 80,
    textAlign: 'center',
  },
});

type SlideProps = {
  title: string;
  right?: boolean;
};

const Slide = ({title, right}: SlideProps) => {
  const transform = [
    {
      translateX: right
        ? responsive.screenWidth / 2 - 50
        : -responsive.screenWidth / 2 + 50,
    },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
