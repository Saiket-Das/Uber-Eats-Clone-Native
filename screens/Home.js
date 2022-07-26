import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/Home/SearchBar';
import HeaderTabs from '../components/Home/HeaderTabs';
import Categories from '../components/Home/Categories';
import RestaurantItem, { localRestaurants } from '../components/Home/RestaurantItem';



export default function Home() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('Hollywood');

    const YELP_API_KEY = '72eUKhw8BshDHT47wYveSGOXyXRTV0jdxulxw8UbrpeokQn8RC4tIX-scvxeNcWHLmhfABvpdKfhyWrwju8G8OfsGJpu13XNIfcTAxcW0rUANPfQe63n2NkXB7XfYnYx';


    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(data => setRestaurantData(data.businesses))
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city])


    return (
        <SafeAreaView style={styles.safeViewArea}>
            <View style={styles.componetns}>
                <HeaderTabs />
                <SearchBar setCity={setCity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeViewArea: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },

    componetns: {
        backgroundColor: '#ffffff',
        padding: 15,
        // flex: 1
    }
});