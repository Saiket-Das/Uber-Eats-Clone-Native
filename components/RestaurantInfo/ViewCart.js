import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../firebase';



export default function ViewCart() {

    const [modalVisible, setModalVisible] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    });


    const addOrderToFireBase = () => {
        // setLoading(true);
        const db = firebase.firestore();
        db.collection("orders")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        setModalVisible(false)
        // .then(() => {
        //     setTimeout(() => {
        //         setLoading(false);
        //         navigation.navigate("OrderCompleted");
        //     }, 2500);
        // });
    };


    const checkoutModal = () => {
        return (
            <>
                <View style={styles.modalContainer}>

                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {
                            items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))
                        }
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={styles.subtotalText}>{totalUSD}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.checkoutTouchButton}
                                onPress
                                ={() => addOrderToFireBase()}>
                                <Text style={styles.checkoutText}>Checkout</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </>
        )
    }


    return (
        <>

            <Modal animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModal()}
            </Modal>


            {total ?
                <View style={styles.viewCart}>

                    <View style={styles.viewCartComp}>
                        <TouchableOpacity style={styles.touchableComp}
                            onPress={() => setModalVisible(true)}>

                            <Text style={styles.viewCartText}> View Cart</Text>
                            <Text style={styles.viewCartAmount}>{totalUSD}</Text>

                        </TouchableOpacity>
                    </View>

                </View>
                :
                <></>
            }
        </>
    )
}






const styles = StyleSheet.create({

    viewCart: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 200,
        zIndex: 999
    },

    viewCartComp: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    touchableComp: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },

    viewCartText: {
        color: 'white',
        fontSize: 20,
    },

    viewCartAmount: {
        color: 'white',
        fontSize: 20,
        position: "absolute",
        right: 20,
        color: "white",
        fontSize: 15,
        top: 17,
    },


    // ---------- MODAL 
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },

    checkoutTouchButton: {
        width: 300,
        position: 'relative',
        backgroundColor: 'black',
        marginTop: 20,
        alignItems: 'center',
        padding: 15,
        borderRadius: 30
    },

    checkoutText: {
        color: 'white',
        fontSize: 18
    }
});