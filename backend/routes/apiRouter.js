const express = require('express');
const Router = require('express-promise-router');

const router = Router();

const insertQuery = "INSERT INTO questions SET ?";
db.query(insertQuery, req.body, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    res.send("Question Added to Database");
  }
});


const insertQuery = "INSERT INTO questions SET ?";
db.query(insertQuery, req.body, (err, result) => {
    if (err) {
    console.log(err);
    } else {
    res.send("Question Added to Database");
    }
});


const updateQuery =
"UPDATE question SET question = ?, cid SET cid = ?, WHERE qid = ?";
db.query(
updateQuery,
[req.body.question, req.body.cid, req.params.qid],
(err, result) => {
    if (err) {
    console.log(err);
    } else {
    res.send(result);
    }
}
);



db.query(
    "DELETE FROM questions WHERE qid = ?",
    req.params.qid,
    (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
    }
);


export default router;