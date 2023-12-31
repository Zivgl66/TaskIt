import React, { useState, useContext, useEffect } from "react";
import { View, TextInput, ToastAndroid ,TouchableOpacity} from "react-native";
import styles from "./addTask.style";
// import { icons } from "../../../constants";
// import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";
import { setItemInStorage } from "../../../utils/storage";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../constants/themeContext";
import LottieView from "lottie-react-native";
import plusAnimation from "../../../Assets/animation/92660-another-plus-icon.json";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(null);
  const theme = useContext(themeContext);

  useEffect(() => {
    setBackgroundColor(theme.inputBlur);
  }, [theme]);
  const handleAddTask = async () => {
    if (newTask != "") {
      await setItemInStorage(newTask);
      EventRegister.emit("tasks changed");
      setNewTask("");
    } else {
      ToastAndroid.showWithGravity(
        "Must be at least 1 character long",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <View style={styles.container(theme.backgroundColor, theme.shadowColor)}>
      <TextInput
        value={newTask}
        onChangeText={(value) => {
          setNewTask(value);
        }}
        style={[
          styles.textInput(theme.text),
          { backgroundColor: backgroundColor },
        ]}
        placeholderTextColor={theme.text}
        placeholder="do something..."
        onFocus={() => setBackgroundColor(theme.inputFocus)}
        onBlur={() => setBackgroundColor(theme.inputBlur)}
      ></TextInput>

      {/* <ScreenHeaderBtn
        iconUrl={icons.plus}
        dimension="60%"
        handlePress={handleAddTask}
      /> */}
      <TouchableOpacity onPress={handleAddTask}>
        <LottieView
          autoPlay
          style={{
            width: 50,
            height: 50,
            backgroundColor: theme.backgroundColor,
          }}
          source={plusAnimation}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
