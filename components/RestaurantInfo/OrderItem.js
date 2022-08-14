import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function OrderItem({ item }) {

    const { title, price } = item

    return (
        <View style={styles.checkOutView}>
            <Text style={styles.checkoutFoodTitle}>{title}</Text>
            <Text style={styles.checkoutFoodPrice}>{price}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    checkOutView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },

    checkoutFoodTitle: {
        fontSize: 16,
        fontWeight: '600',
    },

    checkoutFoodPrice: {
        opacity: 0.7,
        fontSize: 16
    }
})