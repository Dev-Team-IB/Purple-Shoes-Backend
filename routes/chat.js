var express = require('express');
var router = express.Router();
const { User } = require("../models/user");
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

    User.findByToken(req.body.updateUserToken)
    .then((updateUser) => {

        if (!updateUser)
            return res.status(400).json({ isAuth: false,message : "Cannot find such user", error: true});

        const newUser = {
            userID : updateUser._id,
            lastVisit : (new Date().toISOString()),
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
        
    })
    .catch((err) => {
      return res.status(400).json({ isAuth: false, error: err});
    });

});

router.put('/sendMessage', auth, (req, res) => {
    const newMsg = {
        userName : req.user.name,
        userRole : req.user.role,
        content : req.body.content,
        isImage : req.body.isImage,

        imageInfo: {
            data : req.body.imgData,
            contentType : req.body.imgType,
        },
        
        sendDate : (new Date().toISOString()),
    };

    console.log(newMsg);

});

module.exports = router;