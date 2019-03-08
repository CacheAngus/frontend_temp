import Config from '../../config/Fire';
import * as firebase from 'firebase';
require("firebase/firestore");


var FbApp = firebase.initializeApp(Config.firebaseConfig);
module.exports = FbApp; //this doesnt have to be database only