import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";
import styles from "./taskBox.style";
import { completeTaskById } from "../../../utils/storage";
import { EventRegister } from "react-native-event-listeners";

const TaskBox = ({ task, taskTextSize }) => {
  const [isChecked, setChecked] = useState(task.isComplete);
  const [isCompleted, setCompleted] = useState(task.isComplete);
  const router = useRouter();

  const handleCheckboxCheck = async () => {
    await completeTaskById(task.id, !isCompleted);
    setChecked(!isChecked);
    setCompleted(!isCompleted);
    EventRegister.emit("tasks changed");
    EventRegister.emit("groups changed");
  };
  const handleTaskPress = () => router.push(`/task/${task.id}`);

  return (
    <TouchableOpacity onPress={handleTaskPress}>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleCheckboxCheck}
        />
        <View style={styles.border(task.color)}></View>
        <Text style={styles.taskTitle(task.isComplete, taskTextSize)}>
          {task.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskBox;
