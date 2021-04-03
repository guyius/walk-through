import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import GameList from "./GameList";
import Search from "./Search";
import Loading from "./Loading";

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState("");
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
      <Search onSearch={(query) => setQuery(query)} />
      {isLoading && <Loading />}
      {games.length > 0 && !isLoading && (
        <GameList games={games} onGameSelect={onGameSelect} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6BBFF",
    alignItems: "center"
  },
});

/*
PURPLE - A077FF 
PURPLE LIGHT - D6BBFF 
PINK LIGHT FFCAF8 
PINK - FE86C1 
BLUE - 40CBEA 
BLUE LIGHT - 9CE8EE 
*/