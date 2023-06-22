import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./groupEdit.style";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import { icons } from "../../../constants";
import { editGroupById } from "../../../utils/storage_group";
import { changeTasksGroup } from "../../../utils/storage";
import { EventRegister } from "react-native-event-listeners";


const GroupEdit = ({ group, handleCloseEdit, handleTextEdit }) => {
  const [groupText, setGroupText] = useState(group.name);
  const [newValue, setNewValue] = useState(groupText);

  const handleEdit = async () => {
    setGroupText(newValue);
    await editGroupById(group.id, newValue);
    await changeTasksGroup(group.name, newValue);
    EventRegister.emit("groups changed");
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

export default GroupEdit;
