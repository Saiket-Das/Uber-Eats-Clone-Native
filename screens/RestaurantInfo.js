import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/RestaurantInfo/About'
import MenuItem from '../components/RestaurantInfo/MenuItem'
import ViewCart from '../components/RestaurantInfo/ViewCart'



export default function RestaurantInfo({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItem />
            <ViewCart navigation={navigation} RestaurantName={route.params.name} />
        </View>
    )
}