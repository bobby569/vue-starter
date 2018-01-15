import firebase from 'firebase';
import { firebaseConfig } from './config/config';

export const app = firebase.initializeApp(firebaseConfig);
export const ref = firebase.database().ref();
