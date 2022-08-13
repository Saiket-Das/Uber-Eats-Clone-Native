import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function About({ route }) {

    const { name, image, price, reviews, rating, categories } = route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}


const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.restaurantImage} />
);


const RestaurantName = ({ name }) => (
    <Text style={styles.RestaurantName}>{name}</Text>
);


const RestaurantDescription = ({ description }) => (
    <Text style={styles.restaurantDescription}>{description}</Text>
);




const styles = StyleSheet.create({
    restaurantImage: {
        width: '100%',
        height: 180
    },

    RestaurantName: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 8,
        marginHorizontal: 12
    },

    restaurantDescription: {
        fontSize: 15,
        marginTop: 5,
        marginHorizontal: 12
    }
})