var express = require('express');
var router = express.Router();
const { ChatRoom } = require("../models/chatRoom");
const { auth } = require("../middleware/encryptAuth");

router.get('/', function(req, res, next) {
    res.status(200).send("Chatting");
});

router.post('/makeChatRoom', auth, (req, res) => {

    let newCR = new ChatRoom({
        userID : req.user._id,
    });

    newCR.save(function (err) {
        if (err) return res.status(400).send({success : false, err});
        return res.status(200).send({success : true, message : "ChatRoom created"});
    });
});

router.put('/updateUser', auth, (req, res) => {

    const newUser = {
        userID : req.user._id,
        lastVisit : Date.now,
    };

    ChatRoom.updateOne(
        { userID: req.user._id },
        { $set: { userLastVisit: newUser } },
        function (error, success) {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(success);
            }
        }
    );

});

module.exports = router;