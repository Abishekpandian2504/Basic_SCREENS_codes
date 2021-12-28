//(1)basic text screen
// import React from 'react';
// import { Text, StyleSheet } from 'react-native';

// const ImageScreen = () => {
//   return (
//     <Text>Image Screen</Text>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageScreen;


//2nd
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import ImageDetail from '../components/ImageDetail';

// const ImageScreen = () => {
//   return (
//       <View>
//           <ImageDetail />
//           <ImageDetail />
//           <ImageDetail />
//           <ImageDetail />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageScreen;

//3rd
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import ImageDetail from '../components/ImageDetail';

// const ImageScreen = () => {
//   return (
//       <View>
//           <ImageDetail title="Forest"/>
//           <ImageDetail title="Beach"/>
//           <ImageDetail title="Mountain"/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ImageScreen;


// 4th
import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
      <View>
      <Image source={require('../assets/forest.jpg')} />
      <Text>Forest</Text>
      <Text>Image Score - 9</Text>
    
      <Image source={require('../assets/beach.jpg')} />
      <Text>Beach</Text>
      <Text>Image Score - 7</Text>
     
      <Image source={require('../assets/mountain.jpg')} />
      <Text>Mountain</Text>
      <Text>Image Score - 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;










