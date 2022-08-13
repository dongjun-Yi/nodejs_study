let express = require("express");
let app = express();
let fs = require("fs");
let bodyParser = require("body-parser");
let compression = require("compression");
let helmet = require("helmet");
app.use(helmet());

let indexRouter = require("./routes/index");
let topicRouter = require("./routes/topic");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use("/", indexRouter);
app.use("/topic", topicRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});