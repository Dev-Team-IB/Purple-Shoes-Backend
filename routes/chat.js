var express = require('express');
var router = express.Router();
const { User } = require("../models/user");
const { ChatRoom } = require("../models/chatRoom");
const { auth } = require("../middleware/encryptAuth");

router.get('/', function(req, res, next) {
    res.status(200).send("Chatting");
});

module.exports = router;