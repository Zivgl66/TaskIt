import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import TaskBox from "../../common/taskBox/TaskBox";
import { getTasksFromStorage } from "../../../utils/storage";
import AddTask from "../addTask/addTask";
import styles from "./todaysTasks.style";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../../../constants";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodaysTasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const fetchData = async () => {
    console.log("Fetching data in all tasks!");

    const data = await getTasksFromStorage();
    setAllTasks(data);
  };
  useEffect(() => {
    setRefreshing(true);
    if (isFocused) {
      EventRegister.addEventListener("tasks changed", fetchData);
      fetchData();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 200);
    return () => {
      EventRegister.removeEventListener("tasks changed");
    };
  }, [isFocused]);

  // const removeFew = async () => {
  //   const keys = ["taskArray", "groupsArray"];
  //   try {
  //     await AsyncStorage.multiRemove(keys);
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log("Done");
  // };

  return (
    <View style={styles.containerTasks}>
      <View style={styles.containerAddTask}>
        <AddTask />
      </View>
      {refreshing ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View style={styles.containerAllTasks}>
          {allTasks?.map((task, index) => {
            if (!task.isComplete) return <TaskBox key={index} task={task} />;
          })}
          {/* <TouchableOpacity onPress={removeFew}>
            <Text>Press</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};

export default TodaysTasks;
