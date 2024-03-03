import { db } from "./utils"; // Assuming you've named your setup file firebaseSetup.js
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore/lite";
import { ITask } from "../common/types";

type AllTasks = {
  id: string;
} & ITask;

export const getAllTasks = async () => {
  try {
    const tasksCollectionRef = collection(db, "tasks");

    const querySnapshot = await getDocs(tasksCollectionRef);

    const tasks: AllTasks[] = [];

    querySnapshot.forEach((doc) => {
      const taskData = doc.data() as AllTasks;

      // Create a task object with the document ID and data
      const task: AllTasks = {
        id: doc.id,
        title: taskData.title,
        checked: taskData.checked,
        created: taskData.created,
        updated: taskData.updated,
      };

      tasks.push(task);
    });

    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const editTask = async (taskId: string, newData: ITask) => {
  try {
    // Get a reference to the document you want to edit
    const taskRef = doc(db, "tasks", taskId);

    // Add the current timestamp to the newData object
    const timestamp = serverTimestamp();
    const updatedData = {
      ...newData,
      updatedAt: timestamp,
    };

    // Update the document with the updated data
    await updateDoc(taskRef, updatedData);

    console.log("Task updated successfully!");
  } catch (error) {
    console.error("Error updating task:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
export const createTask = async (taskData: ITask) => {
  try {
    // Get a reference to the "tasks" collection
    const tasksCollectionRef = collection(db, "tasks");

    // Add created and updated timestamps to the task data
    const timestamp = serverTimestamp();
    const taskWithTimestamps = {
      ...taskData,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    // Add a new document to the "tasks" collection with the updated task data
    const newDocRef = await addDoc(tasksCollectionRef, taskWithTimestamps);

    console.log("Task created successfully! Document ID:", newDocRef.id);
    return newDocRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
