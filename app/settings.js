import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, SIZES } from "../constants";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            backgroundColor: COLORS.lightWhite,
          }}
        >
          <Text
            style={{
              fontFamily: "MBold",
              textAlign: "center",
              fontSize: SIZES.large,
              margin: SIZES.small,
            }}
          >
            Settings
          </Text>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
