import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBACKgGGBZRmt60FUeOvb0-2aA8fv6snUw",
    authDomain: "lets-chat-65e55.firebaseapp.com",
    projectId: "lets-chat-65e55",
    storageBucket: "lets-chat-65e55.appspot.com",
    messagingSenderId: "714410085984",
    appId: "1:714410085984:web:253b501bfedb843011bd05"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

export { storage, db, firebase as default };