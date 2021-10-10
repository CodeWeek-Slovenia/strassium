import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { col } from "./clr";

const LoadingScreen = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={col.secondaryColor} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default LoadingScreen;