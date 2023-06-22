import React from "react";
import styles from "./colorButton.style";
import { TouchableOpacity } from "react-native";
import { changeTaskColorById } from "../../../utils/storage";
import { changeGroupColorById } from "../../../utils/storage_group";
import { EventRegister } from "react-native-event-listeners";

const ColorButton = ({ handlePress, color, task, group }) => {
  const handleColorChange = async () => {
    if (group === undefined) {
      await changeTaskColorById(task.id, color);
      EventRegister.emit("tasks changed");
    } else {
      await changeGroupColorById(group.id, color);
      EventRegister.emit("groups changed");
    }
    handlePress();
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleColorChange}
      style={styles.container(color)}
    ></TouchableOpacity>
  );
};

export default ColorButton;
