const { db, adminDb } = require('../db')
const admin = require('firebase-admin');
const firebase = require('firebase');

var express = require('express');
var router = express.Router();

/* GET journal entries page. */
router.get('/issues/test', async(req, res) => {
  try {
    const issuesRef = db.collection("Journal Entries");
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

/* GET issues page. */
router.get('/issues', async(req, res) => {
  try {
    const issuesRef = db.collection("Issues");
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
