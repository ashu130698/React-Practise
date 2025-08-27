const express = require('express');
const { register } = require('../controllers/userControlles');

const router = express.Router();

router.post("/register", register);

module.exports = router;