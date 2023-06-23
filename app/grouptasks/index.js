import React, { useContext } from "react";
import { COLORS, SIZES } from "../../constants";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import GroupTasksPage from "../../components/home/groupTasks/GroupTasksPage";
import themeContext from "../../constants/themeContext";

const GroupTasks = () => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            marginTop: 15,
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
            GROUPS
          </Text>
          <GroupTasksPage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupTasks;
