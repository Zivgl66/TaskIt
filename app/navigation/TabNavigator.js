import React from "react";
import CompletedNavigator from "./CompletedNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./StackNavigator";
import GroupNavigator from "./GroupNavigator";
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
      <Tab.Screen name="Tasks" component={MainStackNavigator} />
      <Tab.Screen name="Groups" component={GroupNavigator} />
      <Tab.Screen name="Completed" component={CompletedNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
