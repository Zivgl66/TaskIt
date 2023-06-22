import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, ScrollView, ToastAndroid, Switch, Text } from "react-native";
import {
  deleteTaskById,
  editTaskIdentifierById,
  changeAlarmTask,
} from "../../../utils/storage";
import styles from "./taskCard.style";
import { EventRegister } from "react-native-event-listeners";

import * as Notifications from "expo-notifications";
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
  cancelPushNotification,
} from "../../../utils/notification";
import TaskBox from "../taskBox/TaskBox";
import TaskEdit from "../taskEdit/TaskEdit";
import DateTimePicker from "../dateTimePicker/DateTimePicker";
import ModalColor from "../modalColor/ModalColor";
import { icons, SIZES, COLORS } from "../../../constants";
import CardBtn from "../cardBtn/CardBtn";
import GroupBox from "../groupBox/GroupBox";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import ModalGroups from "../modalGroups/ModalGroups";

const TaskCard = ({ task, group, allGroups }) => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(task.isAlarmOn);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalGroupsVisible, setIsModalGroupsVisible] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [date, setDate] = useState(new Date());
  const [identifier, setIdentifier] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      setIdentifier(await schedulePushNotification(task.name, date));
      await editTaskIdentifierById(task.id, identifier);
      await changeAlarmTask(task.id, true);
      ToastAndroid.showWithGravity(
        "Alarm set",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      await cancelPushNotification(identifier);
      await changeAlarmTask(task.id, false);
      await editTaskIdentifierById(task.id, "");
      ToastAndroid.showWithGravity(
        "Alarm off",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  const handleDelete = async () => {
    await deleteTaskById(task.id);
    EventRegister.emit("tasks changed");
    router.back();
  };
  const handleTextEdit = () => setIsEditing(false);

  const handleCloseEdit = () => setIsEditing(false);

  //    Notification listener (and request handeler)
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // console.log(response);
      }
    );
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ flex: 1 }}>
      {isModalVisible && (
        <ModalColor
          isModalVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          task={task}
        />
      )}
      {isModalGroupsVisible && (
        <ModalGroups
          isModalVisible={isModalGroupsVisible}
          onClose={() => setIsModalGroupsVisible(false)}
          task={task}
          allGroups={allGroups}
        />
      )}
      <View style={styles.container}>
        <View style={styles.containerTaskDetails}>
          {isEditing ? (
            <TaskEdit
              task={task}
              handleCloseEdit={handleCloseEdit}
              handleTextEdit={handleTextEdit}
            />
          ) : (
            <TaskBox task={task} taskTextSize={SIZES.large} />
          )}
        </View>
        <View style={styles.groupContainer}>
          {group ? (
            <GroupBox group={group} />
          ) : (
            <View style={styles.containerGroupBtns}>
              <Text style={styles.textGroup}>Add to a group</Text>
              <ScreenHeaderBtn
                iconUrl={icons.plus}
                dimension={"50%"}
                handlePress={() => setIsModalGroupsVisible(true)}
              />
            </View>
          )}
        </View>
        <View style={styles.containerBottomBtns}>
          <CardBtn
            dimension={"108%"}
            handlePress={() => {
              setIsEditing(true);
            }}
            iconUrl={icons.editBtn}
          />
          <CardBtn
            dimension={"120%"}
            handlePress={() => setIsModalVisible(true)}
            iconUrl={icons.colorBtn}
          />
          <CardBtn
            dimension={"110%"}
            handlePress={handleDelete}
            iconUrl={icons.trashBtn}
          />
        </View>
        <View style={styles.containerTopBtns}>
          <DateTimePicker date={date} setDate={setDate} />
          <Switch
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            trackColor={{ false: COLORS.gray, true: COLORS.blue }}
            thumbColor={COLORS.lightWhite}
            ios_backgroundColor={COLORS.gray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TaskCard;
