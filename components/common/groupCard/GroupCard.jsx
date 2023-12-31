import React, { useState, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "./groupCard.style";
import { icons } from "../../../constants";
import { EventRegister } from "react-native-event-listeners";

import CardBtn from "../cardBtn/CardBtn";
import TaskBox from "../taskBox/TaskBox";
import GroupEdit from "../groupEdit/GroupEdit";
import ModalColor from "../modalColor/ModalColor";
import { deleteGroupById } from "../../../utils/storage_group";
import { changeTasksGroup, addTaskToGroup } from "../../../utils/storage";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import ModalTasks from "../modalTasks/ModalTasks";
import themeContext from "../../../constants/themeContext";

const GroupCard = ({ group, tasks, allTasks, navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTasksVisible, setIsModalTasksVisible] = useState(false);
  const theme = useContext(themeContext);

  const handleDelete = async () => {
    await changeTasksGroup(group.name, "");
    await deleteGroupById(group.id);
    EventRegister.emit("groups changed");
    EventRegister.emit("tasks changed");
    navigation.goBack();
  };
  const handleDeleteTask = async (id) => {
    await addTaskToGroup(id, "");
    EventRegister.emit("groups changed");
    EventRegister.emit("tasks changed");
  };
  const handleTextEdit = () => setIsEditing(false);
  const handleCloseEdit = () => setIsEditing(false);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: theme.backgroundColor,
      }}
    >
      {isModalVisible && (
        <ModalColor
          isModalVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          group={group}
        />
      )}
      {isModalTasksVisible && (
        <ModalTasks
          isModalVisible={isModalTasksVisible}
          onClose={() => setIsModalTasksVisible(false)}
          group={group}
          allTasks={allTasks}
        />
      )}
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <View style={styles.header}>
          <ScreenHeaderBtn
            dimension={"50%"}
            handlePress={() => {
              navigation.goBack();
            }}
            iconUrl={icons.chevronLeft}
          />
        </View>
        <View style={styles.containerTop}>
          <View style={styles.groupColor(group?.color)}></View>
          {isEditing ? (
            <GroupEdit
              group={group}
              handleCloseEdit={handleCloseEdit}
              handleTextEdit={handleTextEdit}
            />
          ) : (
            <Text style={styles.groupTitle(group?.color)}>{group?.name}</Text>
          )}
        </View>
        <View style={styles.containerCenter}>
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
        <View style={styles.containerBottom}>
          <View style={styles.addTasksToGroup}>
            <ScreenHeaderBtn
              dimension={"40%"}
              handlePress={() => {
                setIsModalTasksVisible(true);
              }}
              iconUrl={icons.plus}
            />
          </View>
          {tasks?.map((task, index) => (
            <View key={index} style={styles.containerTasks}>
              <ScreenHeaderBtn
                dimension={"50%"}
                handlePress={() => handleDeleteTask(task.id)}
                iconUrl={icons.trash}
              />
              <View style={styles.taskBox}>
                <TaskBox task={task} navigation={navigation} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default GroupCard;
