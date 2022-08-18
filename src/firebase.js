import firebase from "firebase/app";
import "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBOejY1qiZfkB3_C6Ppz-65ohxEeR1P2nM",
    authDomain: "reactcrud-07.firebaseapp.com",
    projectId: "reactcrud-07",
    storageBucket: "reactcrud-07.appspot.com",
    messagingSenderId: "600350727103",
    appId: "1:600350727103:web:9798e996a6589b6f8edf0a",
    measurementId: "G-R4XP2E8PC7"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  const analytics = getAnalytics(app); 

