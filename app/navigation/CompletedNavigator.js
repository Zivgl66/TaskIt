import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompletedTasks from "../completedtasks/completedtasks";
import Task from "../task/task";

const Stack = createNativeStackNavigator();

const CompletedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Completed"
    >
      <Stack.Screen name="Completed" component={CompletedTasks} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export default CompletedNavigator;
