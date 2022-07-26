import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import { GOOGLE_PLACES_AUTOCOMPLETE_KEY } from "@env"
// import { GOOGLE_PLACES_AUTOCOMPLETE_KEY } from 'react-native-dotenv';




export default function SearchBar({ setCity }) {
    console.log(GOOGLE_PLACES_AUTOCOMPLETE_KEY);
    return (
        <View
            style={{
                ...styles.searchContainer
            }}
        >

            <GooglePlacesAutocomplete
                query={{ key: `${GOOGLE_PLACES_AUTOCOMPLETE_KEY}` }}
                onPress={(data, details = null) => {
                    const city = data.description.split(',')[0];
                    setCity(city)
                }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "500",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 15,
                        flexDirection: "row",
                        alignItems: "center",
                    },
                }}

                renderLeftButton={() => (
                    <View style={styles.locationIcon}>
                        <Ionicons name='location-sharp' size={24}></Ionicons>
                    </View>
                )}

                renderRightButton={() => (
                    <TouchableOpacity style={styles.searchIcon}>
                        <Ionicons name='search' size={24}></Ionicons>
                    </TouchableOpacity>
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
    },

    searchIcon: {
        marginRight: 15
    }
});


