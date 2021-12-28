// import React from 'react';
// import {View,StyleSheet} from 'react-native';
// import ListItem from '../components/ListItem';
// import Screen from '../components/Screen';

// function AccountScreen(props) {
//     return (
//         <Screen style={styles.screen}>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//             <View style={styles.container}>
//                 <FlatList
//                     data={menuItems}
//                     keyExtractor={menuItem => menuItem.title}
//                     ItemSeparatorComponent={ListItemSeparatorComponent} 
//                     renderItem={({ item }) => 
//                         <ListItem 
//                             title={item.title}
//                             ImageComponent={
//                                 <Icon 
//                                 name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
//                                 />
//                             }
//                         />
//                     } 
//                 />
//             </View>
//             <ListItem 
//             title="Log Out"
//             ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
//             />
//         </Screen>
//     );
// }
// const styles=StyleSheet.create({
//     container:
//     {
//         marginVertical: 20
//     }
// })
// export default AccountScreen;


import React from 'react'; // type imrn
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from "../components/Icon";
// import { FlatList } from 'react-native-gesture-handler'; It is wrong , we have to import FlatList from 'react-native'
import colors from '../config/colors';
import ListItemSeparatorComponent from "../components/ListItemSeparator"

const menuItems = [
    {
        title: "My Listings",
        icon: {
           name:
           "format-list-bulleted",
           backgroundColor: colors.primary, 
        }
    },
    {
        title: "My Messages",
        icon: {
           name: "email",
           backgroundColor: colors.secondary, 
        }
    },
    

{
        title: "Complaint",
        icon: {
           name: "delete",
           backgroundColor: colors.secondary, 
        }
    },
]

 
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title = "Abishek"
                subTitle = "Programming React Native" 
                image = { require('../assets/picture.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent} 
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon 
                                name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
                                />
                            }
                        />
                    } 
                />
            </View>
            <ListItem
            title="Log Out"
            ImageComponent={<Icon name="Logout" backgroundColor="#ffe66d"/>}
            />
           
        </Screen>
    );
}
const styles=StyleSheet.create({
    container:
    {
        marginVertical: 20
    },
    
    screen: {
        backgroundColor: colors.light,
    }
})
export default AccountScreen;