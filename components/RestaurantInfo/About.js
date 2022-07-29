import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const image = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const title = 'Farmhouse Kitchen Malay Cuisine';
const description = 'Malay · Comfort Food · $20 · 4 ☆ (2913)'


export default function About() {
    return (
        <View>
            <RestaurantImage image={image} title={title} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />

        </View>
    )
}


const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.restaurantImage} />
);


const RestaurantTitle = ({ title }) => (
    <Text style={styles.restaurantTitle}>{title}</Text>
);


const RestaurantDescription = ({ description }) => (
    <Text style={styles.restaurantDescription}>{description}</Text>
);




const styles = StyleSheet.create({
    restaurantImage: {
        width: '100%',
        height: 180
    },

    restaurantTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 8,
        marginHorizontal: 10
    },

    restaurantDescription: {
        fontSize: 15,
        marginTop: 5,
        marginHorizontal: 10
    }
})