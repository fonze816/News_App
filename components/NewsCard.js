import * as Linking from "expo-linking";
import { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { ThemeContext } from "../context-store/context";

const win = Dimensions.get("window");
const NewsCard = ({ news, navigation }) => {
  const { theme, setTheme, language } = useContext(ThemeContext);
  useEffect(() => {
    return () => {};
  }, [language]);
  const [ImageUrl, setImage] = useState(news.urlToImage);
  const handlepress = (news) => {
    navigation.navigate("NewsDetails", news);
  };

  //parsing the date to a readable string
  let date = new Date(Date.parse(news.publishedAt));
  //rendering nothing if there is no description or author
  if (!news.description || !news.author) return null;

  return (
    <View style={styles.card_container}>
      <TouchableOpacity
        onPress={() => {
          handlepress(news);
        }}
      >
        <Text
          numberOfLines={3}
          style={
            theme === "light"
              ? styles.description_light
              : styles.description_dark
          }
        >
          {news.description}
        </Text>
        <Text style={theme === "light" ? styles.date_light : styles.date_dark}>
          {date.toDateString()}
        </Text>
      </TouchableOpacity>

      <Image
        onError={(error) => {}}
        style={styles.Image}
        resizeMode={"cover"}
        source={{ uri: ImageUrl }}
        defaultSource={require("../unnamed.png")}
      />

      <Divider inset={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    marginTop: 20,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    borderBottomColor: "gray",
  },
  Image: {
    alignSelf: "flex-end",
    marginLeft: 10,
    width: win.width / 4,
    height: win.height / 10,
    borderRadius: 20,
    position: "relative",
  },
  container_light: {
    flex: 1,
    padding: 1,
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
  },
  container_dark: {
    flex: 1,
    padding: 1,
    backgroundColor: "black",
    flexDirection: "column",
    padding: 10,
  },
  date_light: {
    color: "gray",

    margin: 2,
    fontSize: 11,
  },
  date_dark: {
    color: "#dbdbdb",
    margin: 2,
    fontSize: 11,
  },
  description_light: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 2,
    width: win.width - win.width / 4 - 20,

    alignSelf: "flex-start",
    fontSize: 17,
  },
  description_dark: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 2,
    width: win.width - win.width / 4 - 20,

    alignSelf: "flex-start",
    fontSize: 17,
  },
  radio_container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default NewsCard;
