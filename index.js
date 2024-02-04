const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/routes');

const URI = 'mongodb+srv://Barke:Intercom123@intercom.iaez3ji.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json())
mongoose.connect(URI)
.then(result=>{
    app.listen(3000);
    console.log('Your server is listening');
    
})
.catch((err)=>console.log('Sorry not connected', err))
app.use(router)

module.exports = app;
/////firebase admin sdk setup/////////
/* var admin = require("firebase-admin");
var serviceAccount = require("./access/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'intercomsecurity.appspot.com',
});
const bucket = admin.storage().bucket();

 const uploadImage = async (localFilePath, remoteFileName)=> {
    try {
      await bucket.upload(localFilePath, {
        destination: remoteFileName,
      });
      console.log('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  module.exports = uploadImage; */

  /* let localFilePath;
  const remoteFileName = `employes/${localFilePath}`;
  uploadImage(localFilePath, remoteFileName); */
  
/////////firebase admin sdk last line//////////