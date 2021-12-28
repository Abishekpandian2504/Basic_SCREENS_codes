//1st
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const TextScreen = () => {
//   return (
//     <View>
//       <Text>Text Screen</Text>
//     </View>

//   );
// };


// const styles = StyleSheet.create({});

// export default TextScreen;

// 2nd add TextInput 
// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';

// const TextScreen = () => {
//   return (
//     <View>
//       <TextInput />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default TextScreen;


//3rd edit Text in background
// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';

// const TextScreen = () => {
//   return (
//     <View>
//       <TextInput style={styles.input} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     input: {
//         margin: 15,
//         borderColor: 'black',
//         borderWidth: 1
//       }
// });

//export default TextScreen;

//4th
// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';

// const TextScreen = () => {
//   return (
//     <View>
//       <TextInput 
//         style={styles.input} 
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     input: {
//         margin: 15,
//         borderColor: 'black',
//         borderWidth: 1
//       }
// });

// export default TextScreen;


// 5th ADDING USESTATE IN TEXTINPUT
// import React, {useState} from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';

// const TextScreen = () => {
//     const [name, setName] = useState('');
//   return (
//     <View>
//       <Text> Enter Name : </Text>  
//       <TextInput 
//         style={styles.input} 
//         autoCapitalize="none"
//         autoCorrect={false}
//         // value = "Hi There"
//         value = {name}
//         onChangeText = {newValue =>setName(newValue)}
//       />
//       <Text> My name is {name} </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     input: {
//         margin: 15,
//         borderColor: 'black',
//         borderWidth: 1
//       }
// });

// export default TextScreen;


//final
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {/* {true ? <Text>That was true</Text> : null}
      {false ? <Text>That was true</Text> : null} */}
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
