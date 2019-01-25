import firebase from 'firebase';
const {admin} = require('../firebaseConfig.js')
const {log} = require('./log.js');
//add functions for one of the firebas tables
class Users {
//for error get the file from the repository and make sure all of them are in the same folder
    static createUser(userid, userEmail, lastname){
        admin.database().ref('user/' + userid).set({
            name: lastname,
            email: userEmail
        }).catch((err) => console.log(err));
    }
    static getUser(){
        return admin.database().ref('user/').once('value'.then(function(snapshot){
            return snapshot.val() }
        )
        )
}
        

    static updateUser(userid, userEmail, lastname){
    var userData = {
        name: lastname,
        email: userEmail
    };
    var updates = {};
    updates['user/' + userid ] = userData;

    return firebase.database().ref().update(updates);
    
}
    static deleteUser(userid){

    return admin.database().ref('user/' + userid).remove();
}
        
}

module.exports = Users;