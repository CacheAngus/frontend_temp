import firebase from 'firebase';
const {admin} = require('../firebaseConfig.js')
const {log} = require('./log.js');



class Certificates {

    static createCertificate(certid, firstname, lastname, userEmail, certname, businessEmail, note){
        admin.database().ref('certificate/' + certid).set({
            firstName: firstname,
            lastName: lastname,
            busmail: businessEmail,
            email: userEmail,
            certificate: certname,
            notes: note
        }).catch((err) => console.log(err));
    }

    static getCertificate(){
        return admin.database().ref('certificate/').once('value'.then(function(snapshot){
            return snapshot.val() } ))
    }

static updateCertificate(certid, firstname, lastname, userEmail, certname, businessEmail, note){
    var certData = {
        firstName: firstname,
        lastName: lastname,
        busmail: businessEmail,
        email: userEmail,
        certificate: certname,
        notes: note
    };

    var updates = {};
    updates['certificate/' + certid] = certData;

    return firebase.database().ref().update(updates);

}

    static deleteCertificate(certid){
        return admin.database().ref('certificate/' + certid).remove();
    }
}
