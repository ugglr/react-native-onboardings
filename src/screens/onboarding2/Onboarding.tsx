import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
// import Animated from 'react-native-reanimated';

import * as responsive from '../../responsive';

import Slide from './Slide';
import Dot from './Dot';
import SubSlide from './SubSlide';

const CURVE_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfits? Do not worry! Find the best outfits here!',
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Disover the latest trends in fashion and explore your personality',
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  slider: {
    borderBottomRightRadius: CURVE_RADIUS,
    height: responsive.screenHeight * 0.61,
  },
  footer: {
    flex: 1,
  },
  footerUnderlay: {
    ...StyleSheet.absoluteFillObject,
  },
  footerContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: CURVE_RADIUS,
    flex: 1,
    flexDirection: 'row',
    width: responsive.screenWidth * slides.length,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    flexDirection: 'row',
    height: CURVE_RADIUS,
    justifyContent: 'center',
    width: responsive.screenWidth,
  },
});

const Onboarding = ({navigation}) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedBackground = animatedValue.interpolate({
    inputRange: slides.map((_, i) => i * responsive.screenWidth),
    outputRange: slides.map(slide => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.slider, {backgroundColor: animatedBackground}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          pagingEnabled
          bounces={false}
          snapToInterval={responsive.windowWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animatedValue}}}],
            {
              useNativeDriver: false,
            },
          )}>
          {slides.map(({title}, index) => (
            <Slide key={index} title={title} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[styles.footerUnderlay, {backgroundColor: animatedBackground}]}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              transform: [
                {
                  translateX: Animated.multiply(animatedValue, -1),
                },
              ],
            },
          ]}>
          <Animated.View
            style={[
              styles.pagination,
              {
                transform: [
                  {
                    translateX: animatedValue,
                  },
                ],
              },
            ]}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={Animated.divide(
                  animatedValue,
                  responsive.screenWidth,
                )}
                {...{index}}
              />
            ))}
          </Animated.View>

          {slides.map(({subtitle, description}, index) => (
            <SubSlide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: responsive.screenWidth * (index + 1),
                    animated: true,
                  });
                }
              }}
              last={index === slides.length - 1}
              lastOnPress={() => navigation.navigate('Welcome')}
              {...{subtitle, description}}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
