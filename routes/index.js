let express = require("express");
let router = express.Router();
const fs = require('fs');
let db = require("../lib/db.js");
let list = require("../lib/user_list.js");
let auth  = require('../lib/auth.js');

let html;
router.get("/", function (request, response) {
  db.query(`SELECT * FROM user`, function (error, data) {
    if (error) {
      throw error;
    }
    html = list.renderList(data, auth.statusUI(request, response), auth.checkUser(request,response), auth.checkAdmin(request));
    response.send(html);
  });
});

module.exports = router;