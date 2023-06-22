import React from "react";
import { Modal, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./modalTasks.style";
import { icons } from "../../../constants";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import { addTaskToGroup } from "../../../utils/storage";
import { BlurView } from "expo-blur";
import { EventRegister } from "react-native-event-listeners";


const ModalTasks = ({ isModalVisible, onClose, allTasks, group }) => {
  const handleAddToGroup = async (id) => {
    await addTaskToGroup(id, group.name);
     EventRegister.emit("groups changed");
    EventRegister.emit("tasks changed");
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <BlurView intensity={100} tint="light" style={styles.blurContainer}>
          <View style={styles.textContainer}>
            <View></View>
            <Text style={styles.title}>Tasks:</Text>
            <Pressable onPress={onClose}>
              <ScreenHeaderBtn
                iconUrl={icons.close}
                dimension={"60%"}
                handlePress={onClose}
              />
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            {allTasks.length > 0 ? (
              allTasks?.map((task, index) => {
                return (
                  <View key={index + task}>
                    <TouchableOpacity onPress={() => handleAddToGroup(task.id)}>
                      <Text style={styles.contentText(task.color)}>
                        {task.name}
                      </Text>
                      <View style={styles.contentBorder}></View>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <Text style={styles.contentText("black")}>No tasks... </Text>
            )}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalTasks;
