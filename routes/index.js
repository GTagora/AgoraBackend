const { db, adminDb } = require('../db')
const admin = require('firebase-admin');
const firebase = require('firebase');

var express = require('express');
var router = express.Router();

/* GET journal entries page. */
router.get('/getJournalEntries', async(req, res) => {
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
router.post('/postJournalEntries', async(req, res) => {
  try {
    const id = req.body.Author + " Entry";
    const entry = {
      Author: req.body.Author,
      Content_Type: req.body.ContentType,
      Date: req.body.Date,
      Image: req.body.Image,
      Issue: req.body.Issue,
      Tags: req.body.Tags,
      Text: req.body.Text,
      Title: req.body.Title
    };
    const response = await db.collection("Journal Entries").doc(id).set(entry);
    res.send(response);
  } catch(error) {
    res.send(error);
  }
});

/* GET blog entries page. */
router.get('/getBlogEntries', async(req, res) => {
  try {
    const issuesRef = db.collection("Blog");
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

/*POST blog entries page. */
router.post('/postBlogEntries', async(req, res) => {
  try {
    const id = "[" + req.body.Issue + "] " + req.body.Title;
    const entry = {
      Author: req.body.Author,
      Content_Type: req.body.ContentType,
      Date: req.body.Date,
      Image: req.body.Image,
      Issue: req.body.Issue,
      Slug: req.body.Slug,
      Tags: req.body.Tags,
      Text: req.body.Text,
      Title: req.body.Title
    };
    const response = await db.collection("Blog").doc(id).set(entry);
    res.send(response);
  } catch(error) {
    res.send(error);
  }
});

/* GET issues page. */
router.get('/getIssues', async(req, res) => {
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

/* POST issues page. */
router.post('/postIssues', async(req, res) => {
  try {
    const id = req.body.Text;
    const entry = {
      Date: req.body.Date,
      Image: req.body.Image,
      PublicationLink: req.body.PublicationLink,
      Text: req.body.Text,
      Theme: req.body.Theme
    };
    const response = await db.collection("Issues").doc(id).set(entry);
    res.send(response);
  } catch(error) {
    res.send(error);
  }
});

module.exports = router;
