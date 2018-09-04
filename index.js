const express = require('express');
// const router = express.Router();
const app = express();
const sqlConnect= require('sqlConnect.js');
const sqlCommands = require('sqlCommands.json');

app.get('/', (req, res) => {
    res.end();
})

// Get Email List
app.get('/emailList', (req, res) => { 
    res.json(sqlConnect.query(sqlCommands.emailList));
 });

// Get Member List
app.get('/members', (req, res) => {  });

// Get Current Active Members
app.get('/activeMembers', (req, res) => {  });

// Get Member Dues
app.get('/memberDues', (req, res) => {  });

// Get Member Shirt Sizes
app.get('/shirtSizes', (req, res) => {  });

// Add new member
app.post('/member', (req, res) => {  
    const sql_query = 'INSERT INTO member (sid, fName, lName, major, shirtSize) VALUES (';
    var completeSql = sql_query + req.body.sid + ',' + req.body.fName + ',' + req.body.lName + ',' + req.body.major + ',' + req.body.shirtSize + ')';

    res.json(sqlConnect.query(completeSql));
});

// Delete member
app.delete('/member/:id', (req, res) => {  });

module.exports = app;