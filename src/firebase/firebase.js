import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyChXgnbdVp_FQrF76K-niORwzC8KJFUp5c",
    authDomain: "chat-app-d4341.firebaseapp.com",
    projectId: "chat-app-d4341",
    storageBucket: "chat-app-d4341.appspot.com",
    messagingSenderId: "253366598673",
    appId: "1:253366598673:web:856991bb36bed5527c85b0",
    measurementId: "G-9RF10Z3LX0"
  });

  const auth=firebase.auth();
  const db=firebaseConfig.firestore();

  

  export {db,auth};
