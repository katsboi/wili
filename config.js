import * as firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAKikCUcYyLCMPCyx1Xdeiqi_l1K4jlxdI",
    authDomain: "wili-e827f.firebaseapp.com",
    databaseURL: "https://wili-e827f.firebaseio.com",
    projectId: "wili-e827f",
    storageBucket: "wili-e827f.appspot.com",
    messagingSenderId: "1040190654634",
    appId: "1:1040190654634:web:6e8826b1c1b540f3e268d3"
  };

  firebase.default.InitializeApp(firebaseConfig);

export default firebase.firestore();
