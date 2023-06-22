import React from "react";
import { COLORS, SIZES } from "../../constants";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import CompletedTasksPage from "../../components/home/completedTasksPage/completedTasks";

const CompletedTasks = () => {
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
            COMPLETED TASKS
          </Text>
          <CompletedTasksPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletedTasks;
