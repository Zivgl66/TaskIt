import React, { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { AuthProvider } from "../hooks/useAuth";
import { EventRegister } from "react-native-event-listeners";
import theme from "../constants/colorTheme";
import themeContext from "../constants/themeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as TaskManager from "expo-task-manager";
const App = () => {
  const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";
  const [darkMode, setDarkMode] = useState(false);

  const handleNewNotification = async (notificationObject) => {
    try {
      console.log("notificatin recived: ", notificationObject);
    } catch (error) {
      console.error(error);
    }
  };
  TaskManager.defineTask(
    BACKGROUND_NOTIFICATION_TASK,
    ({ data, error, executionInfo }) => handleNewNotification(data.notification)
  );

  useEffect(() => {
    // register task to run whenever is received while the app is in the background
    Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK);

    // listener triggered whenever a notification is received while the app is in the foreground
    const foregroundReceivedNotificationSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        handleNewNotification(notification.request.trigger.remoteMessage);
      }
    );

    return () => {
      // cleanup the listener and task registry
      foregroundReceivedNotificationSubscription.remove();
      Notifications.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK);
    };
  }, []);

  useEffect(() => {
    const listener = EventRegister.addEventListener("Theme change", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    const getThemeFromStorage = async () => {
      let themeStorage = await AsyncStorage.getItem("@theme");

      if (themeStorage) {
        parsedTheme = JSON.parse(themeStorage);
        setDarkMode(parsedTheme);
        EventRegister.emit("Theme change", parsedTheme);
      }
    };

    getThemeFromStorage();
  }, []);

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
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer
        independent={true}
        theme={darkMode === true ? DarkTheme : DefaultTheme}
      >
        <AuthProvider>
          <DrawerNavigator />
        </AuthProvider>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
export default App;
