import React from "react";
import { COLORS, SIZES } from "../../constants";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import GroupTasksPage from "../../components/home/groupTasks/GroupTasksPage";

const GroupTasks = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            marginTop: 15,
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
            GROUPS
          </Text>
          <GroupTasksPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupTasks;
