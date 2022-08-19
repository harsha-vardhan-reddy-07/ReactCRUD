import firebase from "firebase/compat/app";
import "firebase/compat/database";


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
  export default fireDb.database("https://reactcrud-07-default-rtdb.asia-southeast1.firebasedatabase.app/").ref();
//in the above line, we need to export it to make it available for other pages. we need to insert "database link" in "database()"
