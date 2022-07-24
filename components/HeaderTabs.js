import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
    return (
        <View style={styles.tabContainer}>
            {/* ----- Header Tabs Button ----- */}
            <HeaderButton
                text='Delivery' btnColor='black' textColor='white'
            />

            <HeaderButton
                text='Pickup' btnColor='white' textColor='black'
            />
        </View>
    );
};


const HeaderButton = (props) => (
    <TouchableOpacity style={{
        ...styles.tabs, backgroundColor: props.btnColor,
    }}>
        <Text style={{
            ...styles.tabText, color: props.textColor
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

