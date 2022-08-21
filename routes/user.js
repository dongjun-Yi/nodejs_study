const express = require("express");
const router = express.Router();
const path = require("path");
const sanitizeHtml = require("sanitize-html");
const db = require("../lib/db");

router.get("/login", function (request, response) {
  let html = `
    <form action="/user/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="pwd" placeholder="password"></p>
      <p>
        <input type="submit" value="login">
      </p>
    </form>
  `;
  response.send(html);
});

router.post("/login_process", function (request, response) {
  let post = request.body;
  let email = post.email;
  let password = post.pwd;
  db.query(`SELECT * FROM user`, function (error, data) {
    if (error) {
      throw error;
    }
    data.forEach((element) => {
      if (element.email === email && element.password === password) {
        request.session.is_logined = true;
        request.session.user_id = element.user_id;
        request.session.nickname = element.username;
        request.session.save(function () {
          response.redirect('/');
        });
      }
    });
    //response.send('Who?');
  });
});

router.get("/logout", function (request, response) {
  request.session.destroy(function (err) {
    response.redirect("/");
  });
});

module.exports = router;
