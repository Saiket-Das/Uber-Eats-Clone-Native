import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';







export default function MenuItem({ restaurantName, menuItems, hideCheckbox }) {

    const dispatch = useDispatch();

    const selectedItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: {
            ...item, restaurantName: restaurantName,
            checkboxValue: checkboxValue
        }
    });


    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)

    const isFoodInCart = (menuItem, cartItems) => {
        return Boolean(cartItems.find((item) => item.title === menuItem.title))
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                menuItems.map((menuItem, index) =>
                    <View key={index}>
                        <View style={styles.menuItems}>

                            {/* ----------- CHECKBOX ----------- */}
                            {hideCheckbox ? (
                                <></>
                            ) : (
                                <BouncyCheckbox
                                    iconStyle={{ borderColor: "lightgray" }}
                                    fillColor="green"
                                    onPress={(checkboxValue) =>
                                        selectedItem(menuItem, checkboxValue)
                                    }
                                    isChecked={isFoodInCart(menuItem, cartItems)}
                                />
                            )}


                            {/* ----------- FOOD INFO ----------- */}
                            <FoodInfo menuItem={menuItem} />
                            <FoodImage image={menuItem.image} />
                        </View>
                        <Divider width={0.5} orientation='vertical' style={{ marginHorizontal: 20 }} />
                    </View>
                )}
        </ScrollView>
    )
}



const FoodInfo = ({ menuItem }) => (
    <View style={styles.menuInfo}>
        <Text style={styles.restaurantTitle}>{menuItem.title}</Text>
        <Text style={styles.restauranDescription}>{menuItem.description}</Text>
        <Text style={styles.restaurantPrice}>${menuItem.price}</Text>
    </View>
);


const FoodImage = ({ image }) => (
    <Image source={{ uri: image }} style={styles.restaurantImage} />
);




const styles = StyleSheet.create({
    menuItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },

    menuInfo: {
        width: 212,
    },

    restaurantTitle: {
        fontSize: 20,
        fontWeight: '600',
    },

    restaurantImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

})