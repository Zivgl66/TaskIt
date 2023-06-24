import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  View,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import GroupCard from "../../components/common/groupCard/GroupCard";
import { getGroupById } from "../../utils/storage_group";
import { getTasksFromStorage } from "../../utils/storage";
import { COLORS } from "../../constants";
import { useIsFocused } from "@react-navigation/native";
import themeContext from "../../constants/themeContext";

const Group = ({ route, navigation }) => {
  const { groupId } = route.params;
  const [group, setGroup] = useState({});
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const theme = useContext(themeContext);

  const fetchData = async () => {
    console.log("fetch data in groups!");
    const data = await getGroupById(groupId);
    if (data) {
      const allTasksData = await getTasksFromStorage();
      setTasks(allTasksData.filter((task) => task.group === data.name));
      setAllTasks(allTasksData.filter((task) => task.group == ""));
    } else {
      setTasks(undefined);
      setAllTasks(undefined);
    }
    setGroup(data);
  };
  useEffect(() => {
    setRefreshing(true);
    if (isFocused) {
      EventRegister.addEventListener("groups changed", fetchData);
      fetchData();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
    return () => {
      EventRegister.removeEventListener("groups changed");
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} style={{ flex: 1 }} />
        }
      >
        {refreshing ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <View style={{ marginTop: 30 }}>
            <GroupCard
              group={group}
              tasks={tasks}
              allTasks={allTasks}
              navigation={navigation}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Group;
