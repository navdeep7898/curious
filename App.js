import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Button,
} from 'react-native';
import LoginScreen from './src/login/login.js';
import Signupscreen from './src/signup/signup.js';
import Picker from './src/signup/demo';
import Modal from 'react-native-modal';
export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={require('./assets/Mask-Group.png')}
            style={{ width: '30%', height: '30%', resizeMode: 'contain' }}
          />
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <LoginScreen />

        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginLeft: -10.255,
  },
});
