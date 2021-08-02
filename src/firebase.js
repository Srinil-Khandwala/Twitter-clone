// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCFl5VtOwfwc27Ydhkgpdqg5bVDTk4mXBs',
  authDomain: 'twitter-clone-f04b6.firebaseapp.com',
  projectId: 'twitter-clone-f04b6',
  storageBucket: 'twitter-clone-f04b6.appspot.com',
  messagingSenderId: '545710997931',
  appId: '1:545710997931:web:11568aa5a8a222904112ee',
  measurementId: 'G-736Y1Y3MCS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
