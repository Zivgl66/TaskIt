import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { AuthProvider } from "../hooks/useAuth";

const App = () => {
  const registerForPushNotificationsAsync = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
  };
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <AuthProvider>
        <DrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default App;
