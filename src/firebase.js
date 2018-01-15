import firebase from 'firebase';
import { firebaseConfig } from './config/config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseRef = firebase.database().ref();
