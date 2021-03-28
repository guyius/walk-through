import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import GameList from "./GameList";

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getGames = async () => {
      setLoading(true);
      try {
        const json = await fetch(`http://localhost:3000/games/${query}`);
        const data = await json.json();
        setGames(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    getGames();
  }, [query]);

  const onGameSelect = (id: number) => {
    navigation.navigate("Game", { id });
  };
  return (
    <View style={styles.container}>
      <TextInput
        onBlur={(e) => setQuery(e.nativeEvent.text)}
        onEndEditing={(e) => setQuery(e.nativeEvent.text)}
        onChangeText={setTempQuery}
        value={tempQuery}
        placeholder="Search for games"
      />
      {isLoading && <Text>Loading...</Text>}
      {games.length > 0 && !isLoading && (
        <GameList games={games} onGameSelect={onGameSelect} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
