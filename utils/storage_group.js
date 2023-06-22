import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";
import { ToastAndroid } from "react-native";
import { EventRegister } from "react-native-event-listeners";

const guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

// add a new group to local storage
const setItemInStorageGroup = async (group) => {
  try {
    // const parsedArray = [];
    if ((await getGroupByName(group)) === undefined) {
      let parsedArray = [];
      const groupsArray = await AsyncStorage.getItem("groupsArray");
      if (groupsArray != null) {
        parsedArray = JSON.parse(groupsArray);
      }
      const newGroup = {
        id: guidGenerator(),
        name: group,
        color: COLORS.blue,
      };
      parsedArray.push(newGroup);
      await AsyncStorage.setItem("groupsArray", JSON.stringify(parsedArray));
      EventRegister.emit("groups changed");
    } else {
      ToastAndroid.show("Group Name already in use", ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log(error);
  }
};

//  Get array of groups from local storage
const getGroupsFromStorage = async () => {
  try {
    const groupsArray = await AsyncStorage.getItem("groupsArray");
    if (groupsArray) return await JSON.parse(groupsArray);
    else return undefined;
  } catch (error) {
    console.log(error);
  }
};

//  Get a task by its id
const getGroupById = async (id) => {
  try {
    const groupsArray = await getGroupsFromStorage();
    return groupsArray.find((group) => group.id == id);
  } catch (error) {
    console.log(error);
  }
};

//  Get a task by its id
const getGroupByName = async (name) => {
  try {
    const groupsArray = await getGroupsFromStorage();
    if (groupsArray != undefined)
      return groupsArray.find((group) => group.name === name);
    else return undefined;
  } catch (error) {
    console.log(error);
  }
};

//  Edit a group name by its id
const editGroupById = async (id, newGroup) => {
  try {
    const groupsArray = await getGroupsFromStorage();
    const editedGroup = groupsArray.find((group) => group.id == id);
    editedGroup.name = newGroup;
    await AsyncStorage.setItem("groupsArray", JSON.stringify(groupsArray));
    EventRegister.emit("groups changed");
  } catch (error) {
    console.log(error);
  }
};

//  Delete a group by its id
const deleteGroupById = async (id) => {
  try {
    const groupsArray = await getGroupsFromStorage();
    const filteredGroupArray = groupsArray.filter((group) => group.id !== id);
    await AsyncStorage.setItem(
      "groupsArray",
      JSON.stringify(filteredGroupArray)
    );
    EventRegister.emit("groups changed");
  } catch (error) {
    console.log(error);
  }
};

//  Edit a group color by its id
const changeGroupColorById = async (id, color) => {
  try {
    const groupsArray = await getGroupsFromStorage();
    const editedGroup = groupsArray.find((group) => group.id == id);
    editedGroup.color = color;
    await AsyncStorage.setItem("groupsArray", JSON.stringify(groupsArray));
    EventRegister.emit("groups changed");
  } catch (error) {
    console.log(error);
  }
};

export {
  setItemInStorageGroup,
  getGroupsFromStorage,
  getGroupById,
  getGroupByName,
  editGroupById,
  deleteGroupById,
  changeGroupColorById,
};
