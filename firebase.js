import firebase from "firebase";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCiY7FP3xgigUrAUzpQigc1FPT9UNwl_nI",
//   authDomain: "uber-eats-react-native-72dc5.firebaseapp.com",
//   projectId: "uber-eats-react-native-72dc5",
//   storageBucket: "uber-eats-react-native-72dc5.appspot.com",
//   messagingSenderId: "388905903242",
//   appId: "1:388905903242:web:03862100cc3a6163b83973",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCiY7FP3xgigUrAUzpQigc1FPT9UNwl_nI",
  authDomain: "uber-eats-react-native-72dc5.firebaseapp.com",
  projectId: "uber-eats-react-native-72dc5",
  storageBucket: "uber-eats-react-native-72dc5.appspot.com",
  messagingSenderId: "388905903242",
  appId: "1:388905903242:web:b59a2ed2d45cfd3eb83973",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
