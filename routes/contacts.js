const { db, adminDb } = require('../db')
const admin = require('firebase-admin');
const firebase = require('firebase');

var express = require('express');
var router = express.Router();


/* GET contacts. */
router.get('/getContactInfo', async(req, res) => {
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
router.post('/postContactInfo', async(req, res) => {
  try {
    const id = req.body.Email;
    //May need more fields
    const entry = {
        Email: req.body.Email
    };
    const response = await db.collection("Contact Information").doc(id).set(entry);
    res.send(response);
  } catch (error) {
    res.send(error)
  }
});

/* GET staff. */
router.get('/getStaff', async(req, res) => {
  try {
    const issuesRef = db.collection("Staff");
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

/* POST staff. */
router.post('/postStaff', async(req, res) => {
  try {
    const id = req.body.Name;
    //May need more fields
    const entry = {
        Image: req.body.Image,
        Name: req.body.Name,
        Roles: req.body.Roles,
        Title: req.body.Title
    };
    const response = await db.collection("Staff").doc(id).set(entry);
    res.send(response);
  } catch (error) {
    res.send(error)
  }
});
module.exports = router;
