import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';


const menuItems = [
    {
        title: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '14.99',
        description: 'Combination of olive oil, oregano, tomato, olives, mozzarella.'
    },

    {
        title: 'Chicken Burger',
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: '11.00',
        description: 'Combination of tastes and textures sweet, sour, salt with a bit of crunch.'
    },

    {
        title: 'Beef Steak',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '21.50',
        description: 'A flattened disk some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese.'
    },

    {
        title: 'Chicken Burger',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '11.00',
        description: 'Combination of tastes and textures sweet, sour, salt with a bit of crunch.'
    },

    {
        title: 'Beef Steak',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '21.50',
        description: 'A flattened disk some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese.'
    },
]




export default function MenuItem({ restaurantName }) {

    const dispatch = useDispatch();

    const selectedItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
    });


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                menuItems.map((menuItem, index) =>
                    <View key={index}>
                        <View style={styles.menuItems}>

                            {/* ----------- CHECKBOX ----------- */}
                            <BouncyCheckbox iconStyle={{ borderColor: "lightgray" }}
                                onPress={(checkboxValue) => selectedItem(menuItem, checkboxValue)}
                                fillColor='red'
                            />

                            {/* ----------- FOOD INFO ----------- */}
                            <FoodInfo menuItem={menuItem} />
                            <FoodImage image={menuItem.image} />
                        </View>
                        <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                    </View>
                )}
        </ScrollView>
    )
}



const FoodInfo = ({ menuItem }) => (
    <View style={styles.menuInfo}>
        <Text style={styles.restaurantTitle}>{menuItem.title}</Text>
        <Text style={styles.restauranDescription}>{menuItem.description}</Text>
        <Text style={styles.restaurantPrice}>${menuItem.price}</Text>
    </View>
);


const FoodImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.restaurantImage} />
);




const styles = StyleSheet.create({
    menuItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },

    menuInfo: {
        width: 212,
    },

    restaurantTitle: {
        fontSize: 20,
        fontWeight: '600',
    },

    restaurantPrice: {

    },

    restaurantImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

})