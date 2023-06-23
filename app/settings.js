import React, { useState, useContext } from "react";
import { View, ScrollView, Text, Switch } from "react-native";
import { SIZES } from "../constants";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../constants/themeContext";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

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
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
