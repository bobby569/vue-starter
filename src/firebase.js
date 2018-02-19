import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "./config/config";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseRef = firebase.database().ref();
