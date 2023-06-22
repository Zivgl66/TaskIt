import React from "react";
import { Modal, View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./modalGroups.style";
import { icons } from "../../../constants";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import { addTaskToGroup } from "../../../utils/storage";
import { BlurView } from "expo-blur";
import { EventRegister } from "react-native-event-listeners";

const ModalGroups = ({ isModalVisible, onClose, task, allGroups }) => {
  const handleAddToGroup = async (group) => {
    await addTaskToGroup(task.id, group);
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
            <Text style={styles.title}>Groups:</Text>
            <Pressable onPress={onClose}>
              <ScreenHeaderBtn
                iconUrl={icons.close}
                dimension={"60%"}
                handlePress={onClose}
              />
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            {allGroups?.map((group, index) => {
              return (
                <View key={index + group}>
                  <TouchableOpacity
                    onPress={() => handleAddToGroup(group.name)}
                  >
                    <Text style={styles.contentText(group.color)}>
                      {group.name}
                    </Text>
                    <View style={styles.contentBorder}></View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalGroups;
