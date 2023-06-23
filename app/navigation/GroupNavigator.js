import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupTasks from "../grouptasks/index";
import Group from "../group/group";

const Stack = createNativeStackNavigator();

const GroupNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Groups"
    >
      <Stack.Screen name="Groups" component={GroupTasks} />
      <Stack.Screen name="Group" component={Group} />
    </Stack.Navigator>
  );
};

export default GroupNavigator;
