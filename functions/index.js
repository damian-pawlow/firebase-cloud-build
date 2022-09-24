const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld_CloudBuild = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs! ", {structuredData: true});
   response.send("Hello from Firebase!");
 });
