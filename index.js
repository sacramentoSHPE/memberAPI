const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end();
})

// Get Email List
app.get('/emailList', (req, res) => {  });

// Get Member List
app.get('/members', (req, res) => {  });

// Get Current Active Members
app.get('/activeMembers', (req, res) => {  });

// Get Member Dues
app.get('/memberDues', (req, res) => {  });

// Get Member Shirt Sizes
app.get('/shirtSizes', (req, res) => {  });

// Add new member
app.post('/member', (req, res) => {  });

// Delete member
app.delete('/member/:id', (req, res) => {  });

module.exports = app;