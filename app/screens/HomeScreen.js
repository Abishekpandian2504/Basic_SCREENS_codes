import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

  const HomeScreen = ({ navigation }) => {
  // console.log(props);
 // console.log(props.navigation);
 // console.log(props.navigation.navigate('List'))

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
      //  onPress={() => console.log('Button pressed')}
        onPress={() => navigation.navigate('Display')}

        title="Go to DisplayText Demo"
        
      />
      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to NameListScreen Demo"
        onPress={() => navigation.navigate('List')}
        
      />
        <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to ImageScreen Demo"
        onPress={() => navigation.navigate('Image')}
        
      />
       <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to CounterScreen Demo"
        onPress={() => navigation.navigate('Counter')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to ColorScreen Demo"
        onPress={() => navigation.navigate('Color')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to SquareScreen Demo"
        onPress={() => navigation.navigate('Square')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to TextScreen Demo"
        onPress={() => navigation.navigate('Text')}
        
      />

      <Button
      //  onPress={() => console.log('Button pressed')}
        
        title="Go to BoxScreen Demo"
        onPress={() => navigation.navigate('Box')}
        
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
 
});

export default HomeScreen;
