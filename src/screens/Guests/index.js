import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/core'

const GuestScreen = () => {
    const navigation = useNavigation();


    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View style={styles.container}>
            <View>
                {/* Row: 1 Adults */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={styles.buttonContainer}>
                        {/* minus button */}
                        <Pressable onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.button}>
                            <Text style={styles.buttontext}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.value}>{adults}</Text>
                        {/* plus button */}
                        <Pressable onPress={() => setAdults(adults + 1)} style={styles.button}>
                            <Text style={styles.buttontext}>+</Text>
                        </Pressable>

                    </View>
                </View>
                {/* Row:1 Children */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 2 - 12</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={styles.buttonContainer}>
                        {/* minus button */}
                        <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.button}>
                            <Text style={styles.buttontext}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.value}>{children}</Text>
                        {/* plus button */}
                        <Pressable onPress={() => setChildren(children + 1)} style={styles.button}>
                            <Text style={styles.buttontext}>+</Text>
                        </Pressable>

                    </View>
                </View>

                {/* row infants */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                        <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={styles.buttonContainer}>
                        {/* minus button */}
                        <Pressable onPress={() => setInfants(Math.max(0, infants - 1))} style={styles.button}>
                            <Text style={styles.buttontext}>-</Text>
                        </Pressable>
                        {/* value */}
                        <Text style={styles.value}>{infants}</Text>
                        {/* plus button */}
                        <Pressable onPress={() => setInfants(infants + 1)} style={styles.button}>
                            <Text style={styles.buttontext}>+</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
            <View>
                <Pressable onPress={() =>
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults'
                        }
                    })
                } style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Search</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default GuestScreen
