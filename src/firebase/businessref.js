const {admin} = require('../firebaseConfig.js')
const {log} = require('./log.js');
class Business {

static createBusiness(id, businessEmail, name) {
  admin.database().ref('business/' + id).set({
    name: name,
    email: businessEmail
  }).catch((err) => console.log(err));

}

static getBusiness() {
  return admin.database().ref('business/').once('value').then(function(snapshot){
    return snapshot.val()
  }
)
}

static updateBusiness(id, businessEmail, name){
  var businessData = {
    name: name,
    email: businessEmail
  };
  var updates = {};
    updates['business/' + id] = businessData;
    return firebase.database().ref().update(updates);

}

static deleteBusiness(id) {
  return admin.database().ref('business/'+id).remove();
  }
)
}
}

module.exports = Business;
