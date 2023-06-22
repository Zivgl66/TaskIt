import React from "react";
import { Modal, View, Text, Pressable } from "react-native";
import styles from "./modalColor.style";
import { icons, COLORS } from "../../../constants";
import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
import ColorButton from "../colorButton/ColorButton";
import { BlurView } from "expo-blur";

const ModalColor = ({ isModalVisible, onClose, task, group }) => {
  const handleColorChange = () => onClose();

  const colorsArray1 = [
    {
      name: "Red",
      color: COLORS.red,
    },
    {
      name: "Green",
      color: COLORS.green,
    },
    {
      name: "Blue",
      color: COLORS.blue,
    },
    {
      name: "Brown",
      color: COLORS.brown,
    },
  ];
  const colorsArray2 = [
    {
      name: "Yellow",
      color: COLORS.yellow,
    },
    {
      name: "Orange",
      color: COLORS.orange,
    },
    {
      name: "Purple",
      color: COLORS.purple,
    },
    {
      name: "Black",
      color: COLORS.black,
    },
  ];
  return (
    <Modal animationType="fade" transparent={true} visible={isModalVisible}>
      <View style={styles.container}>
        <BlurView intensity={100} tint="light" style={styles.blurContainer}>
          <View style={styles.textContainer}>
            <View></View>
            <Text style={styles.title}>Colors</Text>
            <Pressable onPress={onClose}>
              <ScreenHeaderBtn
                iconUrl={icons.close}
                dimension={"60%"}
                handlePress={onClose}
              />
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            {colorsArray1.map((color, index) => (
              <ColorButton
                key={index}
                color={color.color}
                handlePress={handleColorChange}
                task={task}
                group={group}
              />
            ))}
          </View>
          <View style={styles.contentContainer}>
            {colorsArray2.map((color, index) => (
              <ColorButton
                key={index}
                color={color.color}
                handlePress={handleColorChange}
                task={task}
                group={group}
              />
            ))}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ModalColor;
