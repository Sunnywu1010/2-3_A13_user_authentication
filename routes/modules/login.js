//Include express and express router
const express = require("express");
const router = express.Router();

// route setting of login page
router.post("/",(req,res)=>{
  res.render("login")
})



// export
module.exports = router;
