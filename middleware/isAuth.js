const isAuth = (req, res, next) => {
  console.log(req.session);
  if (req.session.isAuth) {
    next();
  } else {
    res.send({
      status: 401,
      message: "Invalid Session, Please log in",
    });
  }
};

module.exports = isAuth;
