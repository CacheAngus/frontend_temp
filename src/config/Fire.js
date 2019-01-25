import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCOLwFCIMCbGJUfpMuxvDnJmXFS1vDWLJs",
  authDomain: "educert-181af.firebaseapp.com",
  databaseURL: "https://educert-181af.firebaseio.com",
  projectId: "educert-181af",
  storageBucket: "educert-181af.appspot.com",
  messagingSenderId: "757102259240"
};

const fire = firebase.initializeApp(config);
export default fire;