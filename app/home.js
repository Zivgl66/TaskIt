import React, { useContext } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { SIZES } from "../constants";
import TodaysTasks from "../components/home/allTasks/TodaysTasks";
import themeContext from "../constants/themeContext";

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            backgroundColor: theme.backgroundColor,
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
            What's the Plan for Today?
          </Text>
        </View>
        <View>
          <TodaysTasks navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
