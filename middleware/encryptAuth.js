const { User } = require("../models/user");

let auth = (req, res, next) => {
  let token = req.body.userToken

  User.findByToken(token)
    .then((user) => {
        
      if (!user)
        return res.json({ isAuth: false, error: true});

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
    "userToken": "eyJhbGciOiJIUzI1NiJ9.NjExZjRmZmRjODlhNzA4MDljYmQzMThi.FW7Ts5OR0rVkQUZ1V6kZ82ZOy93GPY_snQ2blDGw2I4"
}

{
	"email" : "judemin@naver.com",
	"password" : "1234567"
}
*/