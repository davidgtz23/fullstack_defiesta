const express = require('express');
const router = express.Router();


router.get('/categories', require('./categories'));
router.get('/providers', require('./providers'));
router.get('/users', require('./users'));


module.exports = router;
