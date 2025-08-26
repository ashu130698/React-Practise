const express = require('express');
const { register } = require('module');

const router = express.Router();

router.post("/register", register);

module.exports = router;