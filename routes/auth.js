const express = require("express");
const router = express.Router();
const { SignUp , Login, resetPassword} = require('../Controllers/auth');

router.post('/SignUp', SignUp)
router.post('/login', Login)
router.post('/resetPassword', resetPassword)

module.exports = router;