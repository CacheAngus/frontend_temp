/**
 * Add new certificate to asset registry
 * @param {org.lockness.certificates.createCert} tx The transaction instance 
 * @transaction 
 **/
async function createCert(tx) {
   
    try{
   //Define transaction
   let assetRegistry = await getAssetRegistry('org.lockness.certificates.Certificate'); 
   //Make new resource using factory
   let factory = await getFactory(); 
   let user = factory.newResource('org.lockness.certificates', 'Certificate', tx.CertificateID); 
   
   //Fill out new object
   user.owner = tx.owner; 
   user.name = tx.name; 
   user.description = tx.description; 
   
   //Log event 
   let event = getFactory().newEvent('org.lockness.certificates', 'AddEvent');
   event.certificate = user; 
   emit(event); 
  
   //Add to the global registry
      return assetRegistry.add(user); 
 }

catch (exception){ 
  throw new Error (exception); 
}
}

/**
* Delete certificates from asset registry
* @param {org.lockness.certificates.deleteCert} tx the transaction instance
* @transaction
**/

async function deleteCert(tx) {

try{
 //Get asset registry
 let assetRegistry = await getAssetRegistry('org.lockness.certificates.Certificate');
 
 //Emit event for removal 
 let event = getFactory().newEvent('org.lockness.certificates', 'DelEvent'); 
 event.certificate = tx; 
 emit(event); 
 
 //Return removed asset
 return assetRegistry.remove(tx);
}

catch (exception){
 throw new Error (exception); 
}
}

/**
* Reteurn all of the user's certificates
* @param {org.lockness.certificates.returnCert} tx The transaction instance 
* @transaction 
**/
async function returnCert(tx) {

    try{
   //Define transaction 
   let owner = tx.owner; 
   let assetRegistry = await getAssetRegistry('org.lockness.certificates.Certificate'); 
   let certificates = assetRegistry.getAll(); 
   
   for (var i = 0; i < certificates.length; i++) 
   {
     //Check for the correct owner
     if (certificates[i].owner != owner){
       //Delete from array if the owner doesn't match
       certificates.splice(i, 1);} 
   }
   //Return the array with only certificates from owner
      return certificates;  
 }

catch (exception){ 
  throw new Error (exception); 
}
}

/**
* Add new participant to participantregistry
* @param {org.lockness.certificates.addOwner} tx The transaction instance 
* @transaction 
**/
async function addOwner(tx) {

    try{
   //Define transaction
   let participantRegistry = await getParticipantRegistry('org.lockness.certificates.Owner'); 
   //Make new resource using factory
   let factory = await getFactory(); 
   let user = factory.newResource('org.lockness.certificates', 'Owner', tx.email); 
   
   //Fill out new object
   user.firstName = tx.firstName; 
   user.lastName = tx.lastName; 
   user.issuer = tx.issuer; 
   
   //Log event 
   let event = getFactory().newEvent('org.lockness.certificates', 'NewOwnerEvent');
   event.owner = user; 
   emit(event); 
  
   //Add to the global registry
      return participantRegistry.add(user); 
 }

catch (exception){ 
  throw new Error (exception); 
}
}