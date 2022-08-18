import { View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantInfo/About'
import MenuItem from '../components/RestaurantInfo/MenuItem'
import ViewCart from '../components/RestaurantInfo/ViewCart'



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
        title: 'Vegan Pizza',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '21.50',
        description: 'A flattened disk some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese.'
    },

    {
        title: 'Vagn Burgers',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: '21.50',
        description: 'A flattened disk some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese.'
    },
]

export default function RestaurantInfo({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItem restaurantName={route.params.name} menuItems={menuItems} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}