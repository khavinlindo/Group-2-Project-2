//================================APIROUTES LOGIN==========================//
  app.post("/login", function(req, res) {
    var username = req.body.username;
    var password  = req.body.password;
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if (user.validPassword(req.body.password)) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
        res.json({user: user, access_token: accessToken});
      }
    })
  });
//============================================LOGIN==========================//

//===========================MAAAPIROUTES LOGIN==========================//
  app.post("/login", function(req, res) {
    var username = req.body.username;
    var password  = req.body.password;
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if (user.validPassword(req.body.password)) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
        res.json({user: user, access_token: accessToken});
      }
    })
  });
//============================================LOGIN==========================//

//============================================LOGIN==========================//
  app.post("/login", function(req, res) {
    var username = req.body.username;
    var password  = req.body.password;
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if (user.validPassword(req.body.password)) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
        res.json({user: user, access_token: accessToken});
      }
    })
  });
//============================================LOGIN==========================//

//================================MIDDLEWARE.JS==============================//
const verifyJWTToken = require('./libs/auth');

export function verifyJWT_MW(req, res, next)
{
  let token = (req.method === 'POST') ? req.body.token : req.query.token

  verifyJWTToken(token)
    .then((decodedToken) =>
    {
      req.user = decodedToken.data
      next()
    })
    .catch((err) =>
    {
      res.status(400)
        .json({message: "Invalid auth token provided."})
    })
}
//============================================================================//