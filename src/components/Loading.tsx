import React from "react";
import { StyleSheet, View } from "react-native";
import LoaderIcon from "../images/Loader";

export default function Loading() {
  return (
    <View style={styles.loader}>
      <LoaderIcon stroke="#40CBEA" />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D6BBFF",    
  },
});
