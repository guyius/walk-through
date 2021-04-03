import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SearchIcon from "../images/SearchIcon";
import CloseIcon from "../images/CloseIcon";

interface Props {
  onSearch: (query: string) => void;
}
export default function Search({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.searchBox}>
      <SearchIcon
        height="20"
        width="20"
        fill="#A077FF"
        onClick={() => onSearch(query)}
      />
      <TextInput
        style={styles.searchBar}
        onChangeText={setQuery}
        value={query}
        placeholderTextColor={"#A077FF"}
        placeholder="Search games"
      />
      <CloseIcon
        height="14"
        width="14"
        fill="#A077FF"
        onClick={() => setQuery("")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    maxHeight: 50,
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
  },
  searchBar: {
    height: "100%",
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    color: "#A077FF",
  },
});
