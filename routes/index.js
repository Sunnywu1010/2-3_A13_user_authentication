// Include express and express router
const express = require("express");
const router = express.Router();
// Include Packages
const home = require("./modules/home");
const login = require("./modules/login");
// route setting
router.use("/", home);
router.use("/login", login);
// export
module.exports = router;
