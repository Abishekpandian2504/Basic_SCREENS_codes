//basic text screen
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
//   return (
//     <View>
//       <Text>Box Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default BoxScreen;

//2nd
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>Box Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black'
//   },
//   textStyle: {
//     borderWidth: 1,
//     borderColor: 'red',
//     // marginVertical: 20,
//     // marginHorizontal: 20,
//     margin: 20
//   }
// });

// export default BoxScreen;

//3rd
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>child1</Text>
//       <Text style={styles.textStyle}>child2</Text>
//       <Text style={styles.textStyle}>child3</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black'
//   },
//   textStyle: {
//     borderWidth: 3,
//     borderColor: 'red',
//     // marginVertical: 20,
//     // marginHorizontal: 20,
//     margin: 2
//   }
// });

// export default BoxScreen;

//3rd
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>child1</Text>
//       <Text style={styles.textStyle}>child2</Text>
//       <Text style={styles.textStyle}>child3</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black',
//     //no row means its in column in default
//     //flexDirection: 'row',
//     //justifyContent: 'flex-end',
//     height:200,
//     alignItems: 'center',
//   },
//   textStyle: {
//     borderWidth: 3,
//     borderColor: 'red',
//     // marginVertical: 20,
//     // marginHorizontal: 20,
//     margin: 2,
    
//   }
// });

// export default BoxScreen;

//4th
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyleone}>child1</Text>
//       <Text style={styles.textStyletwo}>child2</Text>
//       <Text style={styles.textStylethree}>child3</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: 'black',
//     //no row means its in column in default
//     //flexDirection: 'row',
//     //justifyContent: 'flex-end',
//     height:200,
//     alignItems: 'center',
//   },
//   textStyleone: {
//     borderWidth: 3,
//     borderColor: 'red',
//     // marginVertical: 20,
//     // marginHorizontal: 20,
//    // margin: 20,
//     flex: 4,
//     },
//    textStyletwo: {
//         borderWidth: 3,
//         borderColor: 'red',
//         // marginVertical: 20,
//         // marginHorizontal: 20,
//         // margin: 20, 
//         flex: 4,
//     }, 
//     textStylethree: {
//         borderWidth: 3,
//         borderColor: 'red',
//         // marginVertical: 20,
//         // marginHorizontal: 20,
//         //margin: 30,
//         flex: 2,
//         },   
// });

// export default BoxScreen;


//5th
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyleone}>child1</Text>
      <Text style={styles.textStyletwo}>child2</Text>
      <Text style={styles.textStylethree}>child3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200, 
      alignItems: 'center',
      // flexDirection: 'row',
      // justifyContent: 'flex-start',
    },
    textStyleone: {
      borderWidth: 3,
      borderColor: 'red',
      //flex: 4,
    },
    textStyletwo: {
      borderWidth: 3,
      borderColor: 'red',
      // alignSelf: 'center',
      // alignSelf: 'flex-start',
      alignSelf: 'flex-end',
      alignSelf: 'stretch',
      textAlign: 'right',
      // flex: 4,
      margin:10,
    },
    textStylethree: {
      borderWidth: 3,
      borderColor: 'red',
      // flex: 2,
    },
  });
  export default BoxScreen;
  

