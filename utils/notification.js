import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { EventRegister } from "react-native-event-listeners";
import * as TaskManager from "expo-task-manager";
const BACKGROUND_NOTIFICATION_TASK = "BACKGROUND-NOTIFICATION-TASK";

//    Register notification
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const schedulePushNotification = async (taskName, dueDate) => {
  let identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: "TaskIt",
      body: `${taskName}`,
    },
    trigger: { date: dueDate },
  });
  return identifier;
};

const cancelPushNotification = async (identifier) => {
  await Notifications.cancelScheduledNotificationAsync(identifier);
};
const cancelAllPushNotification = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "e082d9cf-aa72-4ffd-b7a6-68f0299f6384",
      })
    ).data;
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

export {
  registerForPushNotificationsAsync,
  schedulePushNotification,
  cancelPushNotification,
  cancelAllPushNotification,
};
