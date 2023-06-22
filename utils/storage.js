import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";
import { setItemInStorageGroup, getGroupByName } from "./storage_group";
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

//  Get a task (string) and save it inside the local storage
const setItemInStorage = async (task) => {
  try {
    let parsedArray = [];
    const taskArray = await AsyncStorage.getItem("taskArray");
    if (taskArray != null) {
      parsedArray = JSON.parse(taskArray);
    }
    const newTask = {
      id: guidGenerator(),
      name: task,
      isComplete: false,
      color: COLORS.blue,
      identifier: "",
      group: "Tasks",
      isAlarmOn: false,
    };
    if ((await getGroupByName("Tasks")) == undefined) {
      await setItemInStorageGroup("Tasks");
    }
    parsedArray.push(newTask);
    await AsyncStorage.setItem("taskArray", JSON.stringify(parsedArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

//  Get array of tasks from local storage
const getTasksFromStorage = async () => {
  try {
    const taskArray = await AsyncStorage.getItem("taskArray");
    if (taskArray) return await JSON.parse(taskArray);
    else return undefined;
  } catch (error) {
    console.log(error);
  }
};

//  Get a task by its id
const getTaskById = async (id) => {
  try {
    const taskArray = await getTasksFromStorage();
    if (taskArray) return taskArray.find((task) => task.id == id);
    else return undefined;
  } catch (error) {
    console.log(error);
  }
};

//  Get all completed tasks
const getCompletedTasks = async () => {
  try {
    const taskArray = await getTasksFromStorage();
    return taskArray.filter((task) => task.isComplete === true);
  } catch (error) {
    console.log(error);
  }
};

//  Get all group tasks
const getAllTaskOfGroup = async (group) => {
  try {
    const taskArray = await getTasksFromStorage();
    return taskArray.filter((task) => task.group == group);
  } catch (error) {
    console.log(error);
  }
};

//  Edit a task by its id
const editTaskById = async (id, task) => {
  try {
    const taskArray = await getTasksFromStorage();
    const editedTask = taskArray.find((task) => task.id == id);
    editedTask.name = task;
    await AsyncStorage.setItem("taskArray", JSON.stringify(taskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

//  Edit a tasks identifier by its id
const editTaskIdentifierById = async (id, identifier) => {
  try {
    const taskArray = await getTasksFromStorage();
    const editedTask = taskArray.find((task) => task.id == id);
    editedTask.identifier = identifier;
    await AsyncStorage.setItem("taskArray", JSON.stringify(taskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

//  Edit a task color by its id
const changeTaskColorById = async (id, color) => {
  try {
    const taskArray = await getTasksFromStorage();
    const editedTask = taskArray.find((task) => task.id == id);
    editedTask.color = color;
    await AsyncStorage.setItem("taskArray", JSON.stringify(taskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};
//  Edit a task color by its id
const changeTasksGroup = async (oldGroup, newGroup) => {
  try {
    const allTaskArray = await getTasksFromStorage();
    allTaskArray.map((task) => {
      if (task.group == oldGroup) task.group = newGroup;
    });
    await AsyncStorage.setItem("taskArray", JSON.stringify(allTaskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

const addTaskToGroup = async (id, group) => {
  try {
    const allTaskArray = await getTasksFromStorage();
    allTaskArray.map((task) => {
      if (task.id == id) {
        task.group = group;
      }
    });
    await AsyncStorage.setItem("taskArray", JSON.stringify(allTaskArray));
    // EventRegister.emit("tasks changed");
    EventRegister.emit("groups changed");
  } catch (error) {
    console.log(error);
  }
};

//  Edit the is a task completed or not by its id
const completeTaskById = async (id, isComplete) => {
  try {
    const taskArray = await getTasksFromStorage();
    const editedTask = taskArray.find((task) => task.id == id);
    editedTask.isComplete = isComplete;
    await AsyncStorage.setItem("taskArray", JSON.stringify(taskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

//  Delete a task by its id
const deleteTaskById = async (id) => {
  try {
    const taskArray = await getTasksFromStorage();
    const filteredTaskArray = taskArray.filter((task) => task.id !== id);
    await AsyncStorage.setItem("taskArray", JSON.stringify(filteredTaskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

const changeAlarmTask = async (id, onOff) => {
  try {
    const taskArray = await getTasksFromStorage();
    const editedTask = taskArray.find((task) => task.id == id);
    editedTask.isAlarmOn = onOff;
    await AsyncStorage.setItem("taskArray", JSON.stringify(taskArray));
    EventRegister.emit("tasks changed");
  } catch (error) {
    console.log(error);
  }
};

export {
  setItemInStorage,
  getTasksFromStorage,
  getTaskById,
  getCompletedTasks,
  editTaskById,
  editTaskIdentifierById,
  changeTaskColorById,
  completeTaskById,
  deleteTaskById,
  getAllTaskOfGroup,
  changeTasksGroup,
  addTaskToGroup,
  changeAlarmTask,
};
