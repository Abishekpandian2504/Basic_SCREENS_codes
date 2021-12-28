//1st
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {

//   return (
//     <View>
//       <Text>Current Count: </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default CounterScreen;

//2nd
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {
//   // todo: fix this
//     let counter = 0;
//   return (
//     <View>
//       <Button
//         title="Increase"
//         onPress={() => {  
//           counter++;  
//           console.log(counter);
//         }}
//       />
//       <Button
//         title="Decrease"
//         onPress={() => {
//           counter-- ;
//           console.log(counter);
//         }}
//       />
//       <Text>Current Count: {counter}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default CounterScreen;


//3rd final
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);
//     // we are passing default value to the useState.
//     // counter is piece of variable, whenever we change the variable value, it will not directly affect the counter variable
//     // whenever the vaiable counter changes, we should call setCounter function.
//     // Whenever we call setCounter function, react native will call entire CounterScreen function to rerun.
//     // when the code reruns, that time only counter value will be updated.
//     return (
//         <View>
//           <Button
//             title="Increase"
//             onPress={() => {
//               // Don't do this!
//               // counter++;
//               // counter = counter + 1;
//               setCounter(counter + 1);
//               // following console.log for understanding rerender
//               console.log(counter);
//             }}
//           />
//           <Button
//             title="Decrease"
//             onPress={() => {
//               setCounter(counter - 1);
//               // following console.log for understanding rerender
//               console.log(counter);
//             }}
//           />
//           <Text>Current Count: {counter}</Text>
//         </View>
//       );
//     };
// const styles = StyleSheet.create({});

// export default CounterScreen;
    

//4th useReducer
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
