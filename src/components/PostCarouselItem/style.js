import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        width: Dimensions.get('screen').width - 60,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 10
    }
    ,
    bedrooms: {
        marginVertical: 7.5,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
        marginVertical: 7.5
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        color: 'black',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',

    },
})

export default styles;
