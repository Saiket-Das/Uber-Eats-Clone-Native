import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'



export default function HeaderTabs({ activeTab, setActiveTab }) {

    return (
        <View style={styles.tabContainer}>

            {/* ----- Header Tabs Button ----- */}
            <HeaderButton
                text='Delivery' btnColor='black' textColor='white'
                activeTab={activeTab} setActiveTab={setActiveTab}
            />

            <HeaderButton
                text='Pickup' btnColor='white' textColor='black'
                activeTab={activeTab} setActiveTab={setActiveTab}
            />
        </View>
    );
};


const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            ...styles.tabs,
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text
            style={{
                ...styles.tabText,
                color: props.activeTab === props.text ? 'white' : 'black'
            }}>
            {props.text}
        </Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabs: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    tabText: {
        fontSize: 15,
        fontWeight: '700',
    },
});

