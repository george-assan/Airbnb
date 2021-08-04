import React, { useState } from 'react'
import { View, TextInput, Text, FlatList, Pressable } from 'react-native'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo'
import searchResults from '../../../assets/data/search'
import { useNavigation } from '@react-navigation/core'

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    const [inputText, setInputText] = useState("");
    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* List of destination */}
            <FlatList
                data={searchResults}
                renderItem={({ item }) =>
                    <Pressable onPress={()=>{navigation.navigate('Guests')}} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                }
            />

        </View>
    )
}

export default DestinationSearchScreen
