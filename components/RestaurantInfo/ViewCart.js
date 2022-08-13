import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';



export default function ViewCart() {

    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })


    return (
        <>
            {total ?
                <View style={styles.viewCart}>

                    <View style={styles.viewCartComp}>
                        <TouchableOpacity style={styles.touchableComp}>
                            <Text style={styles.viewCartText}>View Cart {totalUSD}</Text>
                        </TouchableOpacity>
                    </View>

                </View> : <></>}
        </>
    )
}






const styles = StyleSheet.create({

    viewCart: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 150,
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