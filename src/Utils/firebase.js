import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics"
export const firebaseConfig = {
  apiKey: "AIzaSyAq0qFpUcqf2J0jhEgP80_J5LjISdB6jUs",
  authDomain: "meal-kings.firebaseapp.com",
  projectId: "meal-kings",
  storageBucket: "meal-kings.appspot.com",
  messagingSenderId: "355593611845",
  appId: "1:355593611845:web:37e633a27e3ee94a18112c"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);