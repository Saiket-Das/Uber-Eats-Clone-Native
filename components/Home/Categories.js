import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';


const items = [
    {
        image: require('../../assets/images/shoppingBag.png'),
        title: "Pick-up",
    },
    {
        image: require('../../assets/images/softDrink.png'),
        title: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        title: "Bakery Items",
    },
    {
        image: require("../../assets/images/fastFood.png"),
        title: "Fast Foods",
    },
    {
        image: require("../../assets/images/deals.png"),
        title: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        title: "Coffee & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        title: "Desserts",
    },
];


export default function Categories() {
    return (
        <View style={styles.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {
                    items.map((item, index) => (
                        <View key={index} style={styles.singleCategory}>
                            <Image source={item.image}
                                style={styles.categoryImage}
                            />

                            <Text style={styles.categoryTitle}>
                                {item.title}
                            </Text>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}




const styles = StyleSheet.create({

    categoriesContainer: {
        marginVertical: 4,
        padding: 10,
        backgroundColor: 'white'
    },

    singleCategory: {
        alignItems: 'center',
        marginRight: 30,
    },

    categoryImage: {
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },

    categoryTitle: {
        fontSize: 13,
        fontWeight: '600'
    },
});