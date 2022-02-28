//Include express and express router
const express = require("express");
const router = express.Router();

// route setting of home page
router.get("/", (req, res) => {
  res.render("index");
});

// export
module.exports = router;
