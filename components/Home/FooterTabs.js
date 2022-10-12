import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function FooterTabs() {
  return (
    <View style={{ ...styles.footerContainer }}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{ ...styles.footerIcon }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },

  footerIcon: {
    marginBottom: 3,
    alignSelf: "center",
  },
});
