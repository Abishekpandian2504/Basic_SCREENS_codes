// import React from 'react';
// import { Platform, TextInput, View, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import colors from '../config/colors';

// function AppTextInput({ icon }) {
//     return (
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} /> }
//             <TextInput />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     textInput: {
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
//     },   
// })
// export default AppTextInput;


// import React from 'react';
// import { Platform, TextInput, View, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import colors from '../config/colors';

// function AppTextInput({ icon, ...otherProps }) {
//     return (
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} 
//                 size={20} color={colors.medium} 
//                 style={styles.icon}   /> 
//             }
//             <TextInput style={styles.textInput} {...otherProps} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     textInput: {
//         color: colors.dark,
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
//     },   
// })
// export default AppTextInput;


import React from 'react';
import { Platform, TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} 
                size={20} color={defaultStyles.colors.medium} 
                style={styles.icon}   /> 
            }
            {/* <TextInput style={styles.textInput} {...otherProps} /> */}
            <TextInput 
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    // textInput: {
    //     color: colors.dark,
    //     fontSize: 18,
    //     fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
    // },   
})
export default AppTextInput;


