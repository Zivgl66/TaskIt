// import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  View,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import TaskCard from "../../components/common/taskCard/taskCard";
import { getTaskById } from "../../utils/storage";
import {
  getGroupByName,
  getGroupsFromStorage,
} from "../../utils/storage_group";
import { COLORS } from "../../constants";
import { useIsFocused } from "@react-navigation/native";
import themeContext from "../../constants/themeContext";

const Task = ({ route, navigation }) => {
  const { taskId } = route.params;
  const [task, setTask] = useState({});
  const [group, setGroup] = useState({});
  const [allGroups, setAllGroups] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const theme = useContext(themeContext);

  const fetchData = async () => {
    console.log("fetch data in tasks!");
    const data = await getTaskById(taskId);
    if (data) {
      const groupData = await getGroupByName(data.group);
      setGroup(groupData);
    } else setGroup(undefined);
    const allGroupsData = await getGroupsFromStorage();
    setTask(data);
    setAllGroups(allGroupsData);
  };
  useEffect(() => {
    setRefreshing(true);
    EventRegister.addEventListener("tasks changed", fetchData);
    if (isFocused) {
      fetchData();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 150);
    return () => {
      EventRegister.removeEventListener("tasks changed");
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme?.backgroundColor }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} style={{ flex: 1 }} />
        }
      >
        {refreshing ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <View style={{ marginTop: 30, paddingLeft: 10 }}>
            <TaskCard
              task={task}
              group={group}
              allGroups={allGroups}
              navigation={navigation}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Task;
