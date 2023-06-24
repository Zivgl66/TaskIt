import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ScrollView, Text, Switch } from "react-native";
import { SIZES } from "../../constants";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../constants/themeContext";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  const saveThemeInStorage = async (value) => {
    await AsyncStorage.setItem("@theme", JSON.stringify(value));
  };

  useEffect(() => {
    const getThemeFromStorage = async () => {
      let themeStorage = await AsyncStorage.getItem("@theme");
      if (themeStorage) {
        parsedTheme = JSON.parse(themeStorage);
        setDarkMode(parsedTheme);
      }
    };
    getThemeFromStorage();
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "MBold",
            textAlign: "center",
            fontSize: SIZES.large,
            margin: SIZES.small,
            color: theme.text,
          }}
        >
          Dark Mode
        </Text>
        <View>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit("Theme change", value);
              saveThemeInStorage(value);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
