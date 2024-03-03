import { Timestamp } from "firebase/firestore/lite";

export interface ITask {
  title: string;
  checked: boolean;
  created: Timestamp;
  updated: Timestamp;
}
