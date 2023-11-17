const firebase = require('firebase');
const admin = require('firebase-admin');
const path = require('path');
const { serviceAccount, firebaseConfig } = require(path.resolve( __dirname, "./config.js" ));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

firebase.initializeApp(firebaseConfig);

const adminDb = admin.firestore();
const db = firebase.firestore();

module.exports = {
    adminDb,
    db
}