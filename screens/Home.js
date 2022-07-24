import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../components/Home/SearchBar';
import HeaderTabs from '../components/Home/HeaderTabs';
import Categories from '../components/Home/Categories';
import RestaurantItem from '../components/Home/RestaurantItem';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeViewArea}>
            <View style={styles.componetns}>
                <HeaderTabs />
                <SearchBar />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
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