const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const bodyParse = require("body-parser");
const routes = require("./routes");
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(bodyParse.urlencoded({ extended: true }));
app.use(routes);
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
});
