import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ route }: any) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6BBFF",
  },
});
