import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Explore() {

    const Data= [
        {id: 1, title: 'banana'},
        {id: 2, title: 'banana'},
        {id: 3, title: 'banana'},
        {id: 4, title: 'banana'},
    ]

    const MyList = ({name, index}) =>(
        <View>
            <Text>{index}.{name}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <Link href='/(tabs)/(home)/feed'>Feed</Link>
            <FlatList 
                data={Data} 
                renderItem={({item})=><MyList index= {item.id} name={item.title}/>} 
                keyExtractor={name => name.id.toString()}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})