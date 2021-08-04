import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },

    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor:'#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext:{
        fontSize:20,
        color:'#474747'
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    value: {
        fontSize: 16,
        marginHorizontal: 20
    }
})


export default styles

