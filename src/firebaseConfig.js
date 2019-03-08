import firebase from 'firebase';
import serviceAccount from './firebaseCredentials.json';

export default firebase.initializeApp(serviceAccount);
