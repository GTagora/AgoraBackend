const { db, adminDb } = require('../db')
const admin = require('firebase-admin');
const firebase = require('firebase');

var express = require('express');
var router = express.Router();


/* GET contacts. */
router.get('/', async(req, res) => {
  try {
    const issuesRef = db.collection("Contact Information");
    const response = await issuesRef.get();
    let responseArr = [];
    response.forEach(doc => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch(error) {
    res.send(error);
  }
});
module.exports = router;
