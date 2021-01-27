const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { Router } = require('express');
const cors = require('cors');

require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(cors());        //allows clientside to make requests
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());

//create connection to database
const db = mysql.createPool({
  host: process.env.DB_HOST, //localhost
  user: process.env.DB_USER, //root
  password: process.env.DB_PASSWORD, //password
  database: process.env.DB, //ravenbooks
});

// routes for database
app.get("/questions", (req,res) => {                            //sends data to page
    db.query("SELECT * FROM questions", (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/questions/:cid", (req, res) => {
  db.query(
    "SELECT FROM questions WHERE cid = ?",
    req.params.cid,
    (err, result) => {
      if (err) {
        console .log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/questions", (req, res) => {                         //sends data to the database
    const insertQuery = "INSERT INTO questions SET ?";
    db.query(insertQuery, req.body, (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("Question Added to Database")
        }
    })
})

app.put("/questions/:qid", (req, res) => {                          //put request for updating 
    const updateQuery = 
    "UPDATE question SET question = ?, cid SET cid = ?, WHERE qid = ?";
    db.query(
        updateQuery,
        [req.body.question, req.body.cid, req.params.qid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else{
                res.send(result);
            }
        }
    );
});

app.delete('/questions/:qid', (req, res) => {
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
    )
})

// express route
const home = (req, res) => {
    res.send('Hello World!')
}

app.get('/', home)  //localhost:5000

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('App is listening on port ' + listener.address().port)
});
