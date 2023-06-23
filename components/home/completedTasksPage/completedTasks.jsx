import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import TaskBox from "../../common/taskBox/TaskBox";
import { getCompletedTasks } from "../../../utils/storage";
import styles from "./completedTasks.style";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../../../constants";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../constants/themeContext";

const CompletedTasksPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const theme = useContext(themeContext);

  const fetchData = async () => {
    const data = await getCompletedTasks();
    if (data) setCompletedTasks(data);
    else setCompletedTasks([]);
  };
  useEffect(() => {
    setRefreshing(true);
    if (isFocused) {
      EventRegister.addEventListener("tasks changed", fetchData);

      fetchData();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
    return () => {
      EventRegister.removeEventListener("tasks changed");
    };
  }, [isFocused]);
  return (
    <View style={styles.containerTasks}>
      {refreshing ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : completedTasks?.length > 0 ? (
        <View style={styles.containerAllTasks}>
          {completedTasks?.map((task, index) => {
            return <TaskBox key={index} task={task} />;
          })}
        </View>
      ) : (
        <View style={styles.containerNoTask}>
          <Text style={[styles.noTaskText, { color: theme.text }]}>
            No completed Tasks yet...
          </Text>
        </View>
      )}
    </View>
  );
};

export default CompletedTasksPage;
