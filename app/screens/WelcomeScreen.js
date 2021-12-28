import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
      <ImageBackground 
        blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <AppButton title="Login" />
      {/* <View style={styles.registerButton}></View> */}
      <AppButton title="Register" color="secondary" />
      </View>
      {/* <View style={styles.loginButton}></View> */}
      </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: "center",
    }, 
    // loginButton: {
    //     width: "100%",
    //     height: 70,
    //     backgroundColor: "#fc5c65",
    //   }, 

    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
      logo: {
        width: 100,
        height: 100,
      }, 
      logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
      },
      tagline: {
          fontSize: 25,
          fontWeight: '600',
          paddingVertical: 20,
      },
      // registerButton: {
      //   width: "100%",
      //   height: 70,
      //   backgroundColor: "#4ecdc4",
      // },  
})

export default WelcomeScreen;