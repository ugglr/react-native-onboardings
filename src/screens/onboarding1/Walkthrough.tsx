import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, Animated} from 'react-native';

import * as responsive from '../../responsive';
import * as fonts from '../../fonts';

const styles = StyleSheet.create({
  container: {
    width: responsive.screenWidth,
    height: '100%',
  },
  scrollview: {},
  stepContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: responsive.screenWidth,
  },
  stepTitle: {
    ...fonts.H1,
  },
});

type StepProps = {
  title: string;
  body: string;
};

const Step = ({title, body}: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const steps = [
  {
    title: 'Step 1',
    body: 'This is the body 1',
  },
  {
    title: 'Step 2',
    body: 'This is the body 2',
  },
  {
    title: 'Step 3',
    body: 'This is the body 3',
  },
];

const Walkthrough = () => {
  const [animationValue] = useState(new Animated.Value(0));
  const nbrOfSreens = steps.length;

  const backgroundInterpolate = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#FF1744', '#D500F9', '#444'],
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        decelerationRate="fast"
        snapToInterval={responsive.screenWidth}
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: backgroundInterpolate,
        }}>
        {steps.map(step => (
          <Step title={step.title} body={step.body} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Walkthrough;
