import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBpn7B-OsP1ZiwFkVm2xbP4SHupBtgoNT8",
    authDomain: "vue-chat-afa73.firebaseapp.com",
    projectId: "vue-chat-afa73",
    storageBucket: "vue-chat-afa73.appspot.com",
    messagingSenderId: "675767549506",
    appId: "1:675767549506:web:e18c1264abeb35711bb7db"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;  //外部からの読み込み