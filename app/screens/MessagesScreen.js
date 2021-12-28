//First
// import React from 'react';
// import { FlatList } from 'react-native';

// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     },
// ]

// function MessagesScreen(props) {
//     return (
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }/>
//     );
// }

// export default MessagesScreen;

// Second (content going under the notch area)
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';

// import Constants from 'expo-constants';
// console.log(Constants)
import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     },
// ]

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/picture.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/picture.jpg')
    },
]

function MessagesScreen(props) {
    // state variable called count, it returns an array, first variable is state variable, and second one is updating state variable. by convention it is called setCount
    // const array = useState(0);
    // const count = array[0];
    // const setCount = array[1]; // similar setState component in class function

    // we will create above three lines as single line using destructuring
    // const[count, setCount] = useState(0);
    
    // for avoiding name conflicts, we change messages array as initialMessage
    // instead of '0', we pass initialMessage to useState hook function.
    const[messages, setMessages] = useState(initialMessages);

    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages array
        // or call the server to delete 

        // remove the deleted message using filter methods. and returns new array
        // const newMessages = messages.filter(m => m.id !== message.id);
        // setMessages(newMessages); // we are updating the state, it will cause the rerender.

        // we will update the above line as single line
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
    //<SafeAreaView style={styles.screen}>
    <Screen>
      <FlatList
        data={messages} 
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => (
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image} 
                onPress={() => console.log("Message selected", item)}
                // renderRightActions={() => (
                //     <View
                //         style={{
                //             backgroundColor: "red",
                //             width: 70,
                //         }}
                //     ></View>
                // )}
                // renderRightActions={ListItemDeleteAction}

                // renderRightActions={ () => ( <ListItemDeleteAction onPress={ () => console.log(item) } /> )}

                renderRightActions={() => ( <ListItemDeleteAction onPress={ () => handleDelete(item) } /> )}
                     
                />
        )}
            // ItemSeparatorComponent={() => <View style={{width: "100%", height: 1, backgroundColor: '#000'}}></View>}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/picture.jpg') 
                    },
                ])
            }
            } 
            />
         {/* </SafeAreaView> */}
        
        </Screen>
    );
}

const styles = StyleSheet.create({
    // screen: {
    //     // paddingTop: Platform.OS === 'andorid' ? StatusBar.currentHeight : 0
    //     paddingTop: Constants.statusBarHeight
    // }
})

export default MessagesScreen;