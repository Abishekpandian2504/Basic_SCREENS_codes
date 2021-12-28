// import React, { useState } from 'react';
// import { View,StyleSheet,Button } from 'react-native';

// const ColorScreen = () => {
//     return (
//         <View>
//             <Button
//               title= "Add a Color"
//               />
//               <View
//                 style={{height: 100, width:100,
//                 backgroundColor: 'rgb(0, 255, 0)'}}
//                 />
//         </View>
//     );
// };

// const styles = StyleSheet.create({});

// export default ColorScreen;


//2nd import more color
// import React, { useState } from 'react';
// import { View, StyleSheet, Button } from 'react-native';

// const ColorScreen = () => {
//   return (
//     <View>
//       <Button title="Add a Color" />
//       <View
//         style={{height: 100, width: 100, backgroundColor: randomRgb() }} 
//       />
//     </View>
//   );
// };

// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   return `rgb(${red}, ${green}, ${blue})`;
// };

// const styles = StyleSheet.create({});

// export default ColorScreen;

//3rd buuton used change color
// import React, { useState } from 'react';
// import { View, StyleSheet, Button, FlatList } from 'react-native';

// const ColorScreen = () => {
//   const [colors, setColors] = useState([]);
//   // we can the array changes overtime
//   console.log(colors);

//   return (
//     <View>
//       <Button
//         title="Add a Color"
//         onPress={() => {
//           // we are creating brand new array. the ...colors, all the colors is added into the new array, by calling randomRgb.
//           setColors([...colors, randomRgb()]);
//         }}
//       />
//       <View
//         style={{height: 100, width: 100, backgroundColor: randomRgb() }} 
//       />
//     </View>
//   );
// };

// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   return `rgb(${red}, ${green}, ${blue})`;
// };

// const styles = StyleSheet.create({});

// export default ColorScreen;


import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
