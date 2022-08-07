import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ViewCart() {
    return (

        <View style={styles.viewCart}>

            <View style={styles.viewCartComp}>
                <TouchableOpacity style={styles.touchableComp}>
                    <Text style={styles.viewCartText}>View Cart</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}






const styles = StyleSheet.create({

    viewCart: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 140,
        zIndex: 999
    },

    viewCartComp: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    touchableComp: {
        width: 300,
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        position: 'relative'
    },

    viewCartText: {
        color: 'white',
        fontSize: 20,
    }
});