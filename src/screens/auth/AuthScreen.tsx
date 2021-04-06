import React, {ReactElement, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import * as responsive from '../../responsive';
import * as fonts from '../../fonts';
import * as colors from '../../colors';
import * as coffeeAndBiscuitLottie from '../../assets/lotties/coffeeAndBiscuit.json';

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: responsive.sideMargin,
    width: '100%',
  },
  titleText: {
    ...fonts.H2,
  },
  tabTextWrapper: {
    borderBottomWidth: 5,
    borderBottomColor: colors.whiteShadow,
  },
  activeTabText: {
    borderBottomColor: colors.brown,
  },
  lottieContainer: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    width: responsive.screenWidth,
  },
  lottie: {
    height: responsive.screenHeight / 2.5,
  },
  formSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsive.screenHeight / 3,
  },
});

const AuthScreen = (): ReactElement => {
  const [currentForm, setCurrentForm] = useState('login');

  const isLogin = currentForm === 'login';
  const isSignup = currentForm === 'signup';

  return (
    <View style={styles.screenContainer}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={coffeeAndBiscuitLottie}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>

      <View style={styles.formSwitchContainer}>
        <TouchableOpacity
          style={[styles.tabTextWrapper, isLogin && styles.activeTabText]}
          onPress={() => setCurrentForm('login')}>
          <Text style={styles.titleText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabTextWrapper, isSignup && styles.activeTabText]}
          onPress={() => setCurrentForm('signup')}>
          <Text style={styles.titleText}>Sign-up</Text>
        </TouchableOpacity>
      </View>

      {isLogin && <LoginForm />}
      {isSignup && <SignupForm />}
    </View>
  );
};

export default AuthScreen;
