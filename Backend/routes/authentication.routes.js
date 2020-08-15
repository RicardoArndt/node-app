const express = require('express');
const router = express.Router();

const authenticationService = require('../services/authentication.service').getInstance(); 

router.get('/', (req, res) => {
  res.send(authenticationService.login());
});

router.get('/about', (req, res) => {
    res.send('About birds');
});

module.exports = router;
