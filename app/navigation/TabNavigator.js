import React from "react";
import GroupTasks from "../grouptasks/index";
import Home from "../home";
import CompletedTasks from "../completedtasks/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { padding: 2 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Tasks") {
            iconName = "tasks";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (route.name === "Completed") {
            iconName = "checkmark-circle-sharp";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else {
            return (
              <FontAwesome5 name={"layer-group"} size={size} color={color} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Tasks" component={Home} />
      <Tab.Screen name="Groups" component={GroupTasks} />
      <Tab.Screen name="Completed" component={CompletedTasks} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
