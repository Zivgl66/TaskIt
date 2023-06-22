import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";

import { COLORS, SIZES } from "../constants";
import TodaysTasks from "../components/home/allTasks/TodaysTasks";

const Home = () => {
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
            What's the Plan for Today?
          </Text>
        </View>
        <View>
          <TodaysTasks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
