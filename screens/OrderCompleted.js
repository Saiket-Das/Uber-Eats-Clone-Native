import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";


export default function OrderCompleted() {

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <SafeAreaView style={styles.OrderCompletedCon}>

            <LottieView style={styles.checkLottieView}
                source={require('../assets/animations/check-mark.json')}
                autoPlay
                speed={0.5}
                loop={false}
            />

            <Text style={styles.orderCompletedText}>Your order at {restaurantName} has been placed for
                <Text style={{ fontWeight: '600' }}> ${total.toFixed(2)}</Text>
            </Text>

            <LottieView style={styles.cookingLottieView}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                speed={0.5}
            />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    OrderCompletedCon: {
        flex: 1,
        backgroundColor: '#fff',
    },

    checkLottieView: {
        height: 100,
        alignSelf: 'center',
        marginBottom: 30
    },
    orderCompletedText: {
        paddingHorizontal: 15,
        fontSize: 16,
    },
    cookingLottieView: {
        height: 200,
        alignSelf: 'center',
    }
});