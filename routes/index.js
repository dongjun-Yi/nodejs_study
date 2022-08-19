let express = require("express");
let router = express.Router();
let db = require("../lib/db.js");
let list = require("../lib/list.js");
let auth  = require('../lib/auth.js');
let cookie;
let cookie_data;

let html;
router.get("/", function (request, response) {
  db.query(`SELECT * FROM user`, function (error, data) {
    if (error) {
      throw error;
    }
    html = list.renderList(data, auth.statusUI(request, response), auth.checkUser(request,response));
    response.send(html);
  });
});

module.exports = router;