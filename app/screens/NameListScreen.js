// import React from 'react';
// import { Text, StyleSheet, FlatList } from 'react-native';
// import styles from '../config/styles';

// const NameListScreen = () => {
// //function NameListScreen() {
// const friends = [
//     { name: 'Deepak'},
//     { name: 'Abishek'},
//     { name: 'Koushik'},
//     { name: 'Thrisha'},
//     { name: 'Srihari'},
//     { name: 'Karthik'},
//     { name: 'Mohit'},
//     { name: 'Junaid'},
//     { name: 'Sailesh'}
//   ];

//   return (
//     <FlatList
//     keyExtractor={friend => friend.name}
//       data={friends}
//       renderItem={({ item }) => {
//         return (
//           <Text style={styles.textStyle}>
//             {item.name} 
//           </Text>
//         );
//       }}
//     />
//   );
// };

// const styles = StyleSheet.create({
//      textStyle: {
//          marginVertical:50
//      }
//       });

//(a)
// import React from 'react';
// import { Text, StyleSheet, FlatList } from 'react-native';

// const NameListScreen = () => {
//   const friends = [
//     { name: 'Deepak'},
//     { name: 'Abishek'},
//     { name: 'Koushik'},
//     { name: 'Thrisha'},
//     { name: 'Srihari'},
//     { name: 'Karthik'},
//     { name: 'Mohit'},
//     { name: 'Junaid'},
//     { name: 'Sailesh'}
//   ];

// return (
//     <FlatList
//     horizontal={true}
//     showsHorizontalScrollIndicator={false}
//       keyExtractor={friend => friend.name}
//       data={friends}
//       renderItem={({ item }) => {
//         return (
//           <Text style={styles.textStyle}>
//             {item.name} 
//           </Text>
//         );
//       }}
//     />
//   );
// };

// const styles = StyleSheet.create({
//     textStyle: {
//          marginVertical: 50
//       }
// });


// export default NameListScreen;

//(b)

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NameListScreen = () => {
  const friends = [
    { name: 'Deepak', age: 22 },
    { name: 'Abishek', age: 22 },
    { name: 'Koushik', age: 20 },
    { name: 'Thrisha', age: 18 },
    { name: 'Srihari', age: 15 },
    { name: 'Karthik', age: 15 },
    { name: 'Mohit', age: 19 },
    { name: 'Junaid', age: 19 },
    { name: 'Sailesh', age: 18 }
  ];

return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default NameListScreen;


