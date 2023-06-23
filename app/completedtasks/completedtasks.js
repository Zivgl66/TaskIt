import React, { useContext } from "react";
import { SIZES } from "../../constants";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import CompletedTasksPage from "../../components/home/completedTasksPage/completedTasks";
import themeContext from "../../constants/themeContext";

const CompletedTasks = ({ route, navigation }) => {
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
            COMPLETED TASKS
          </Text>
          <CompletedTasksPage navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletedTasks;
