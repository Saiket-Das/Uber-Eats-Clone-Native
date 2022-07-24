import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
        </View>
    )
};



const RestaurantImage = () => (
    <>
        <Image
            style={{ ...styles.restaurantImage, width: '100%', height: 220 }}
            source={{ uri: 'https://images.unsplash.com/photo-1588001291548-948f55922bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80' }}

        />
        <TouchableOpacity>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
)


const styles = StyleSheet.create({
    restaurantImage: {
        // width: '100%',
        // height: 100
    },
})