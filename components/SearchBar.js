import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";


export default function SearchBar() {
    return (
        <View
            style={{
                ...styles.searchContainer
            }}
        >

            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    },
                }}

                renderLeftButton={() => (
                    <View style={styles.locationIcon}>
                        <Ionicons name='location-sharp' size={24}></Ionicons>
                    </View>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },

    // googleSearchBar: {

    // },

    locationIcon: {
        marginLeft: 10,
    }
});


