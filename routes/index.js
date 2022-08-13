let express = require("express");
let router = express.Router();
let db = require("../lib/db.js");
let list = require("../lib/list.js");

let html;
router.get("/", function (request, response) {
  db.query(`SELECT * FROM user`, function (error, data) {
    if (error) {
      throw error;
    }
    html = list.renderList(data);
    response.send(html);
  });
});

module.exports = router;