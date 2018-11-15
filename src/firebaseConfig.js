
var firebase = require("firebase");

var serviceAccount = require("./firebaseCredentials.json");

firebase.initializeApp(serviceAccount);

var database = firebase.database()

module.exports.database = database
