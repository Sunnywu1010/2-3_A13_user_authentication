//Include express and express router
const express = require("express");
const router = express.Router();
const users = require("../../users");

// route setting of login page
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let existEmail = [];
  let existPassword = [];

  // determined the input value exists or not
  existEmail = users.filter((user) => user.email === email);
  existPassword = users.filter((user) => user.password === password);
  
  // if existUser does't have the user then "render" error
  if (existEmail.length === 0) {
    res.render("error", {
      error: "Email is",
    });
  } else if (existPassword.length === 0) {
    res.render("error", {
      error: "Password is",
    });
  } else if (existEmail.length === 0 && existPassword.length === 0) {
    res.render("error", {
      error: "Email and password are",
    });
  } else {
    // if existUser has the user then "render" login
    res.render("login", {
      firstName: existUser[0].firstName,
    });
  }
});

// export
module.exports = router;
