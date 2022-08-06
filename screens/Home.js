import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/Home/SearchBar';
import HeaderTabs from '../components/Home/HeaderTabs';
import Categories from '../components/Home/Categories';
import RestaurantItem, { localRestaurants } from '../components/Home/RestaurantItem';
import { YELP_API_KEY } from "@env"
import { Divider } from 'react-native-elements';
import FooterTabs from '../components/Home/FooterTabs';



export default function Home({ navigation }) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('Hollywood');
    const [activeTab, setActiveTab] = useState('Delivery')


    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then(res => res.json())
            .then(data => setRestaurantData(data.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
            )));
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])


    return (
        <SafeAreaView style={styles.safeViewArea}>
            <View style={styles.componetns}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} naviagtion={navigation} />
            </ScrollView>

            <Divider width={1} />
            <FooterTabs></FooterTabs>

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