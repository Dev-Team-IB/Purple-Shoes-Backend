const { User } = require("../models/user");

let auth = (req, res, next) => {
  let token = req.body.userToken

  User.findByToken(token)
    .then((user) => {
        
      if (!user)
        return res.status(400).json({ isAuth: false, error: true});

      req.token = token;
      req.user = user;
      next();
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { auth };

/*
{
	"email" : "judemin@naver.com",
	"password" : "1234567"
}
*/