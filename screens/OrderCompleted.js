import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import MenuItems from "../components/RestaurantInfo/MenuItem";
import firebase from '../firebase';
import checkMarkBoxLottie from '../assets/animations/85185-checkmark.json';
import scannerLottie from '../assets/animations/6519-cooking.json';




export default function OrderCompleted() {

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Bologna",
                description: "With butter lettuce, tomato and sauce bechamel",
                price: "$13.50",
                image:
                    "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
        ],
    });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ margin: 15, alignItems: "center", height: "100%", }} >

                <LottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={checkMarkBoxLottie}
                    speed={0.5}
                    // loop={false}
                    autoPlay
                />

                <Text style={{ fontSize: 18, padding: 3 }}>Your order at {restaurantName} has been placed for
                    <Text style={{ fontWeight: '600' }}> {totalUSD}</Text>
                </Text>

                <ScrollView>
                    <MenuItems
                        menuItems={lastOrder.items}
                        hideCheckbox={true}
                    />

                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={scannerLottie}
                        speed={0.5}
                        autoPlay


                    />
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}
