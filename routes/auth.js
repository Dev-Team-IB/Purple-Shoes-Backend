var express = require('express');
var router = express.Router();
const { User } = require("../models/user");


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.post('/register', function(req, res, next) {
  //post로 넘어온 데이터를 받아서 DB에 저장
  //user 모델에서 mongoose에 연결 => 바로 데이터베이스에 저장
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;