import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    )
};



const RestaurantImage = () => (
    <>
        <Image
            style={styles.restaurantImage}
            source={{ uri: 'https://images.unsplash.com/photo-1588001291548-948f55922bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80' }}

        />
        <TouchableOpacity style={styles.heartIcon}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
);


const RestaurantInfo = () => (
    <View style={styles.restaurantInfo}>
        <View>
            <Text style={{ ...styles.foodName }}>Chicken Noddles with Egg</Text>
            <Text style={{ ...styles.foodDeliveryTime }}>30-35 • min</Text>
        </View>
        <View style={{ ...styles.foodRating }}>
            <Text >4.5</Text>
        </View>
    </View>
)






const styles = StyleSheet.create({
    restaurantImage: {
        width: '100%',
        height: 220
    },

    heartIcon: {
        position: 'absolute',
        right: 15,
        top: 15,
    },

    restaurantInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    foodName: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    foodDeliveryTime: {
        fontSize: 15,
        color: 'gray'
    },

    foodRating: {
        // backgroundColor: '#eee',
        width: 30,
        height: 30,
        borderRadius: '50%'
    },
})