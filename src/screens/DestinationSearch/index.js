import React, { useState } from 'react'
import { View, TextInput, Text, FlatList, Pressable } from 'react-native'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo'
import searchResults from '../../../assets/data/search'
import { useNavigation } from '@react-navigation/core'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import SuggestionRow from '../../components/LocationSuggestions'

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details) => {
                        // console.log(data, details)
                        navigation.navigate('Guests')
                    }}
                    query={{
                        key: 'API KEY GOES HERE',
                        language: 'en'
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    renderRow={(item) => <SuggestionRow item={item} />}

                    suppressDefaultStyles
                />
            </View>
        </View>
    )
}

export default DestinationSearchScreen
