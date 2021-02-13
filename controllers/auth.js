const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1];
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Your Order",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("602289dc032fc866d4ed12d4")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      req.session.save(err => {
        res.redirect("/");
      })
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
