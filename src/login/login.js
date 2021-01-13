import React, { Component } from "react";

import styles from "./style.js";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,ImageBackground,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614";
// const image = 'assets/Groupbg1.png';


export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <ImageBackground 
          source={require('assets/Groupbg1.png')}
          style={{ flex: 1,
            width: null,
            height: null,
            position:'fixed',
            }}
        >
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
         
          <Text style={styles.logoText}>Signup</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Signup with email"
            />
           
            <Button
              // buttonStyle={styles.LoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              
            />
            
          </View>
        </View>
       </ImageBackground >
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
