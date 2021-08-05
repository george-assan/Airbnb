import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        width: Dimensions.get('screen').width - 60
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        flex:1,
        marginHorizontal:10
    }
    ,
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        color:'black',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',

    },
})


export default styles
