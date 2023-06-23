import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./taskBox.style";
import { completeTaskById } from "../../../utils/storage";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../constants/themeContext";

const TaskBox = ({ task, taskTextSize, navigation }) => {
  const [isChecked, setChecked] = useState(null);
  const [isCompleted, setCompleted] = useState(null);
  const theme = useContext(themeContext);

  useEffect(() => {
    setChecked(task?.isComplete);
    setCompleted(task?.isComplete);
  }, []);

  const handleCheckboxCheck = async () => {
    await completeTaskById(task?.id, !isCompleted);
    setChecked(!isChecked);
    setCompleted(!isCompleted);
    EventRegister.emit("tasks changed");
    EventRegister.emit("groups changed");
  };
  const handleTaskPress = () => {
    navigation.navigate("Task", {
      taskId: task.id,
    });
  };

  return (
    <TouchableOpacity onPress={handleTaskPress}>
      <View
        style={[styles.container, { backgroundColor: theme?.backgroundColor }]}
      >
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleCheckboxCheck}
        />
        <View style={styles.border(task?.color)}></View>
        <Text
          style={[
            styles.taskTitle(task?.isComplete, taskTextSize),
            { color: theme?.text },
          ]}
        >
          {task?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskBox;
