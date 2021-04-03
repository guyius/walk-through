import React, { FC } from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
  StyleSheet
} from "react-native";

type Props = {
  id: number;
  name: string;
  url: string;
  images?: {
    id: number;
    imageId: string;
    coverThumb: string;
    coverSmall: string;
    coverBig: string;
  };
};

type OwnProps = {
  onGameSelect: (id: number) => void;
  games: Props[];
};

const GameGrid: FC<{
  game: { item: Props };
  onGameSelect: (id: number) => void;
}> = ({ game, onGameSelect }) => {
  const { item } = game;
  const screenWidth = Dimensions.get("window").width;
  const tileWidth = screenWidth / 2;
  const tileHeight = (120 / 90) * tileWidth;

  return (
    <TouchableOpacity onPress={() => onGameSelect(item.id)}>
      <View
        style={{
          width: tileWidth,
          height: tileHeight,
          backgroundColor: "#D6BBFF",
        }}
      >
        {item.images?.coverBig ? (
          <Image
            style={styles.gridImage}
            source={{ uri: item.images.coverBig }}
          />
        ) : (
          <Text
            style={styles.gridText}
          >
            {item.name}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const GameList: FC<OwnProps> = ({ games, onGameSelect }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        horizontal={false}
        data={games}
        renderItem={(game) => (
          <GameGrid game={game} onGameSelect={onGameSelect} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridImage: { width: "100%", height: "100%" },
  gridText: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 10,
  },
});
export default GameList;
