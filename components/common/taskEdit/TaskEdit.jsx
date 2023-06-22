import React, { useState } from "react";
import { View, TextInput } from "react-native";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import styles from "./taskEdit.style";
import { icons } from "../../../constants";
import { editTaskById } from "../../../utils/storage";
import { EventRegister } from "react-native-event-listeners";

const TaskEdit = ({ task, handleCloseEdit, handleTextEdit }) => {
  const [taskText, setTaskText] = useState(task.name);
  const [newValue, setNewValue] = useState(taskText);

  const handleEdit = async () => {
    setTaskText(newValue);
    await editTaskById(task.id, newValue);
    EventRegister.emit("tasks changed");
    handleTextEdit();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={newValue}
        onChangeText={(value) => {
          setNewValue(value);
        }}
        autoFocus
        style={styles.textInput}
      />
      <View style={styles.containerBtn}>
        <ScreenHeaderBtn
          iconUrl={icons.checked}
          dimension="60%"
          handlePress={handleEdit}
        />
        <ScreenHeaderBtn
          iconUrl={icons.close}
          dimension="50%"
          handlePress={handleCloseEdit}
        />
      </View>
    </View>
  );
};

export default TaskEdit;
