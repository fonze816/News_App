import { StatusBar } from "expo-status-bar";
import i18n from "i18n-js";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { ThemeContext } from "../context-store/context";
const Settings = () => {
  //consts for changing themes and languages
  const { theme, setTheme, language, setLanguage } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <View
      style={theme == "light" ? styles.container_light : styles.container_dark}
    >
      <View>
        <Text style={theme == "light" ? styles.title_light : styles.title_dark}>
          {i18n.t("Settings.AppTheme")}
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => {
            setTheme(newValue);
          }}
          value={theme}
        >
          <View style={styles.radio_container}>
            <Text
              style={theme === "light" ? styles.text_light : styles.text_dark}
            >
              {i18n.t("Settings.Light")}
            </Text>
            <RadioButton.Android
              value="light"
              uncheckedColor={theme === "light" ? "black" : "white"}
              color={theme === "light" ? "black" : "white"}
            />
          </View>
          <View style={styles.radio_container}>
            <Text
              style={theme == "light" ? styles.text_light : styles.text_dark}
            >
              {i18n.t("Settings.Dark")}
            </Text>
            <RadioButton.Android
              value="dark"
              color={theme === "light" ? "black" : "white"}
              uncheckedColor={theme === "light" ? "black" : "white"}
            />
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <Text style={theme == "light" ? styles.title_light : styles.title_dark}>
          {i18n.t("Settings.AppLanguage")}
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => {
            setLanguage(newValue);
          }}
          value={language}
        >
          <View style={styles.radio_container}>
            <Text
              style={theme === "light" ? styles.text_light : styles.text_dark}
            >
              {i18n.t("Settings.English")}
            </Text>
            <RadioButton.Android
              value="en"
              uncheckedColor={theme === "light" ? "black" : "white"}
              color={theme === "light" ? "black" : "white"}
            />
          </View>
          <View style={styles.radio_container}>
            <Text
              style={theme == "light" ? styles.text_light : styles.text_dark}
            >
              {i18n.t("Settings.French")}
            </Text>
            <RadioButton.Android
              value="fr"
              color={theme === "light" ? "black" : "white"}
              uncheckedColor={theme === "light" ? "black" : "white"}
            />
          </View>
        </RadioButton.Group>
      </View>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
    </View>
  );
};
const styles = StyleSheet.create({
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
  text_light: {
    color: "black",
  },
  text_dark: {
    color: "white",
  },
  title_light: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  title_dark: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  radio_container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Settings;
