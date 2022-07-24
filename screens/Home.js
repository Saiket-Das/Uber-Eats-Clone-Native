import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeViewArea}>
            <View style={styles.componetns}>
                <HeaderTabs />
                <SearchBar />
            </View>
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
        flex: 1
    }
});