import React from 'react';
import { Text, View } from 'react-native';

const DisplayText = () => {
  const name = 'Abishek';

  return (
    <View>
      <Text style={{ fontSize: 45,color:"red" }}>Getting started with React Native!</Text>
      <Text style={{ fontSize: 20,color:"green" }}>My name is {name}</Text>
    </View>
  );
};

export default DisplayText;
