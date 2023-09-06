import firebase from "firebase/compat/app"; //firebase@9.0以上の場合はこれらしい
import  "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2WCz9lp_RlEYwjRVcqOJZwyTUhcjm-D4",
    authDomain: "line-clone-with-react-sample.firebaseapp.com",
    projectId: "line-clone-with-react-sample",
    storageBucket: "line-clone-with-react-sample.appspot.com",
    messagingSenderId: "384042777110",
    appId: "1:384042777110:web:9ac17cf5713aa0643c5337"
  
});


const db = firebaseApp.firestore();


const auth = firebase.auth();



export {db, auth} ;
