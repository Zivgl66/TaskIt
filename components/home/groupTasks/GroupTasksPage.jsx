import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, SafeAreaView } from "react-native";
import { getGroupsFromStorage } from "../../../utils/storage_group";
import styles from "./groupTasksPage.style";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../../../constants";
import { EventRegister } from "react-native-event-listeners";
import AddGroup from "../../common/addGroup/AddGroup";
import GroupBox from "../../common/groupBox/GroupBox";

const GroupTasksPage = () => {
  const [groupsArray, setGroupsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const fetchData = async () => {
    console.log("Fetching data in all groups!");
    const data = await getGroupsFromStorage();
    setGroupsArray(data);
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
    <View style={styles.containerTasks}>
      <View style={styles.containerAddTask}>
        <AddGroup />
      </View>
      {refreshing ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View style={styles.containerAllTasks}>
          <SafeAreaView>
            {groupsArray?.map((group, index) => (
              <GroupBox group={group} key={group + index} />
            ))}
          </SafeAreaView>
        </View>
      )}
    </View>
  );
};

export default GroupTasksPage;
