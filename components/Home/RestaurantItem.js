import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "Bali's Grill",
        image_url:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        categories: ["Bali", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];



export default function RestaurantItem({ restaurantData }) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
            {restaurantData.slice(2, 5).map((restaurant, index) =>
                <View key={index} style={styles.restaurantContainer}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>)}
        </TouchableOpacity>
    )
};



const RestaurantImage = ({ image }) => (
    <>
        <Image
            style={styles.restaurantImage}
            source={{ uri: image }}

        />
        <TouchableOpacity style={styles.heartIcon}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
);


const RestaurantInfo = ({ name, rating }) => (
    <View style={styles.restaurantInfo}>
        <View>
            <Text style={{ ...styles.foodName }}>{name}</Text>
            <Text style={{ ...styles.foodDeliveryTime }}>30-35 • min</Text>
        </View>
        <View style={{ ...styles.foodRating }}>
            <Text >{rating}</Text>
        </View>
    </View>
)




const styles = StyleSheet.create({

    restaurantContainer: {
        // marginTop: 10,
        padding: 15,
        backgroundColor: 'white'
    },

    restaurantImage: {
        width: '100%',
        height: 220
    },

    heartIcon: {
        position: 'absolute',
        right: 25,
        top: 25,
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
        backgroundColor: '#eee',
        width: 30,
        height: 30,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
})