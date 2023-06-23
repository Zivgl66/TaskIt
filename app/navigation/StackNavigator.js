import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../home";
import Task from "../task/task";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
