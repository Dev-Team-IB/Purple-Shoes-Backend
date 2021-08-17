var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.post('/register', function(req, res, next) {
  //회원가입을 할때 필요한것
  //post로 넘어온 데이터를 받아서 DB에 저장해준다
  const user = new User(req.body);
  
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });

});

module.exports = router;