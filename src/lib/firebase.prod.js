import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyC3-i70IzNb0K4ss1gUqWbb4DK5UrS5gkA",
    authDomain: "netflix-clone-691ba.firebaseapp.com",
    databaseURL: "https://netflix-clone-691ba.firebaseio.com",
    projectId: "netflix-clone-691ba",
    storageBucket: "netflix-clone-691ba.appspot.com",
    messagingSenderId: "70707275329",
    appId: "1:70707275329:web:ccda6eefaf7d5a30b788c0"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };