//1st
// import React from 'react';
// import { View } from 'react-native';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   // return (
//   //   <WelcomeScreen />
//   // );
//   return <ViewImageScreen />;
// }

//second

// import React from 'react';
// import { View } from 'react-native';

// import Card from "./app/components/Card";

// export default function App() {
//   return (
//     <View style={{backgroundColor: '#f8f4f4', padding: 20,
//     paddingTop: 100
//   }}>
//     <Card 
//       title="Red jacket for sale"
//       subTitle="Rs.100" 
//       // image="./app/assets/jacket.jpg" /> 
//       image={require("./app/assets/jacket.jpg")} />   
//   </View>
//   );
// }

// Third
// import React from 'react';
// import { View } from 'react-native';

// import Card from "./app/components/Card";
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

// export default function App() {
//   return (
//     <ListingDetailsScreen />
//     );
// }

//Fourth
// import React from 'react';
// import { View } from 'react-native';
// import ViewImageScreen from './app/screens/ViewImageScreen';

// export default function App() {
//   // return (
//   //   <WelcomeScreen />
//   // );
//   return <ViewImageScreen />;
// }

// Fifth render messagesscreen
// import React from 'react';
// import { View } from 'react-native';
// import MessagesScreen from './app/screens/MessagesScreen';

// export default function App() {
//   return <MessagesScreen />;
// }

//fifth(a)movie name
// import React from 'react';
// import { View } from 'react-native';
// import MovieScreen from './app/screens/MovieScreen';

// export default function App() {
//   return <MovieScreen />;
// }

//5th(b)NewMovieScreen
// import React from 'react';
// import { View } from 'react-native';
// import NewMovieScreen from './app/screens/NewMovieScreen';

// export default function App() {
//   return <NewMovieScreen />;
// }


// SIXTH
// import React from 'react';
// import { View } from 'react-native';
// import Screen from './app/components/Screen';
// import Icon from './app/components/Icon';
// import MessagesScreen from './app/screens/MessagesScreen';

// export default function App() {
//   return <Screen>
//     {/* <Icon 
//       name ="email"
//       size = {50}
//       backgroundColor = "red"
//       iconColor = "white" /> */}

//       {/* <Icon 
//       name ="email" /> */}

//       <Icon 
//         name ="email"  size={100} />  
//   </Screen>;
// }

// seventh
// import React from 'react';
// import { View } from 'react-native';
// import Screen from './app/components/Screen';
// import Icon from './app/components/Icon';
// import MessagesScreen from './app/screens/MessagesScreen';
// import ListItem from './app/components/ListItem';

// export default function App() {
//   return <Screen>
//     <ListItem 
//     title="My title" 
//     // subTitle="My subtitle" 
//     ImageComponent={ <Icon name="email" />} />
//   </Screen>;
// }

//8th
// import React from 'react';
// import AccountScreen from './app/screens/AccountScreen';

// export default function App(){
//     return (
//         <AccountScreen/>
//     );
// }



// 9th
// import React from 'react';

// import ListingScreen from './app/screens/ListingScreen';

// export default function App() {
//   return (
//     <ListingScreen />
//   );
// }

//10th
// import React from 'react';
// import { TextInput } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   return (
//     <Screen>
       
//       <TextInput 
//         placeholder="First Name" 
//         style={{
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }} 
//         />  
//     </Screen>
//   );
// }

//11th
// import React, { useState } from 'react';
// import { TextInput, Text } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   const [firstName, setFirstName] = useState('');
//   return (
//     <Screen>
//       <Text>{firstName}</Text>
//       <TextInput 
//        maxLength={5}
//          keyboardType="numeric"
//         //clearButtonMode="always" // it will only works for ios, it will show clear button on right side screen
//          secureTextEntry={true} // if it is boolean prop, we donot have to give {true} or false, simply secureTextEntry is enough

//         onChangeText={text => setFirstName(text)}
//         placeholder="First Name" 
//         style={{
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }} 
//         /> 
//     </Screen>
//   );
// }

//12th
// import React from 'react';

// import Screen from "./app/components/Screen";
// import AppTextInput from "./app/components/AppTextInput";

// export default function App(props) {
//   return (
//     <Screen>
//               <AppTextInput placeholder="Username" icon="email" />
//     </Screen>
//   );
// }

//13th
// import React, { useState } from 'react';
// import { Switch } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   const [isNew, setIsNew] = useState(false);
//   return (
//     <Screen>
//      <Switch value={isNew} 
//      onValueChange={(newValue) => setIsNew(newValue)} />
//     </Screen>
//   );
// }

//14th
// import React, {useState} from 'react';

// import Screen from "./app/components/Screen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },  
// ];


// export default function App() {
//   return (
//     <Screen>
//       <AppPicker items={categories} icon ="apps" placeholder="Category" />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
// }

//14th(a)
// import React, {useState} from 'react';

// import Screen from "./app/components/Screen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },  
// ];


// export default function App() {
//   const [category, setCategory] = useState(categories[0]);
//   return (
//     <Screen>
//       <AppPicker 
//       selectedItem={category}
//       onSelectItem={item => setCategory(item)}
//       items={categories} icon ="apps" placeholder="Category" />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
// }

//15th
// import React, {useState} from 'react';
// import LoginScreen from './app/screens/LoginScreen';

// export default function App(props) {
//   return <LoginScreen />;
// }

//16th
// import React from "react";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

// export default function App() {
//   return <ListingEditScreen />;
// }

//17th
//display Text
// import React from 'react';
// import DisplayText from './app/screens/DisplayText';

// export default function App() {
//   return <DisplayText />;
// }

//18th
//namelistscreen
// import React from 'react';
// import NameListScreen from './app/screens/NameListScreen';

// export default function App() {
//   return <NameListScreen />;
// }

//19th
// import React from 'react';
// import HomeScreen from './app/screens/HomeScreen';

// export default function App() {
//   return <HomeScreen />;
// }

//19th (b)HomeScreen button method
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import HomeScreen from './app/screens/HomeScreen';
// import DisplayText from './app/screens/DisplayText';
// import NameListScreen from './app/screens/NameListScreen';
// import ImageScreen from './app/screens/ImageScreen';

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Display: DisplayText,
//     List: NameListScreen,
//     Image: ImageScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'App',
//     },
//   }
// );



// export default createAppContainer(navigator);

//19th(c)
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import HomeScreen from './app/screens/HomeScreen';
// import DisplayText from './app/screens/DisplayText';
// import NameListScreen from './app/screens/NameListScreen';
// import ImageScreen from './app/screens/ImageScreen';
// import CounterScreen from './app/screens/CounterScreen';
// import ColorScreen from './app/screens/ColorScreen';
// import SquareScreen from './app/screens/SquareScreen';
// import TextScreen from './app/screens/TextScreen';
// import BoxScreen from './app/screens/BoxScreen';

// const navigator = createStackNavigator(
//     {
//       Home: HomeScreen,
//       Display: DisplayText,
//       List: NameListScreen,
//       Image: ImageScreen,
//       Counter: CounterScreen,
//       Color: ColorScreen,
//       Square: SquareScreen,
//       Text: TextScreen,
//       Box:  BoxScreen
//     },
//     {
//       initialRouteName: 'Home',
//       defaultNavigationOptions: {
//         title: 'App',
//       },
//     }
//   );

//   export default createAppContainer(navigator);


//20 imagescreen(a)
import React from 'react';

import ImageScreen from './app/screens/ImageScreen';

export default function App(props){
    console.log (props)
    return (
        <ImageScreen/>
    );
}





  












 
