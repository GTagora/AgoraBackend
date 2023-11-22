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

/* POST contacts. */
router.post('/Contact Information', async(req, res) => {
  try {
    const id = req.body.email;
    //May need more fields
    const entry = {
        email: req.body.email
    };
    const response = await db.collection("Contact Information").doc(id).set(entry);
    res.send(response);
  } catch (error) {
    res.send(error)
  }
});
module.exports = router;
