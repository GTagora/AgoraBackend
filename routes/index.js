const { db, adminDb } = require('../db')
const admin = require('firebase-admin');
const firebase = require('firebase');

var express = require('express');
var router = express.Router();

/* GET journal entries page. */
router.get('/Journal Entries', async(req, res) => {
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

/*POST journal entries page. */
router.post('/Journal Entries', async(req, res) => {
  try {
    const entry = {
      Author: req.body.Author,
      Content_Type: req.body.ContentType,
      Date: req.body.Date,
      Issue: req.Issue,
      Tags: req.Tags,
      Text: req.body.Text,
      Title: req.body.Title
    };
    const response = await db.collection("Journal Entries").set(entry);
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

/*POST issues page. */
router.post('/issues', async(req, res) => {
  try {
    const entry = {
      Date: req.body.Date,
      Image: req.body.Image,
      PublicationLink: req.body.PublicationLink,
      Text: req.body.Text,
      Theme: req.body.Theme
    };
    const response = await db.collection("Issues").set(entry);
  } catch(error) {
    res.send(error);
  }
});

module.exports = router;
