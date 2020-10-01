import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDER0dUC3O5dUZH4FwERXr4Wr6254kS13M",
    authDomain: "photo-firegram.firebaseapp.com",
    databaseURL: "https://photo-firegram.firebaseio.com",
    projectId: "photo-firegram",
    storageBucket: "photo-firegram.appspot.com",
    messagingSenderId: "5849486716",
    appId: "1:5849486716:web:eac24eb141295ba37180f9",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }
