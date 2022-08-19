let express = require("express");
let router = express.Router();
let user_add = require("../lib/user_add.js");
let user_update = require("../lib/user_update.js");
let db = require("../lib/db.js");
let html;

//생성
router.get("/create", function (request, response) {
  html = user_add.renderUserAdd();
  response.send(html);
});

router.post("/create_process", function (request, response) {
  let id = 0;
  console.log(request.body);
  db.query(`SELECT * FROM user`, function (error, data) {
    if (error) {
      throw error;
    }
    data.forEach((element) => {
      if(element.user_id >= id)
        id=element.user_id;
    });
    let sql = `INSERT INTO user (user_id, username, password, email) VALUES(${
      id + 1
    }, ?, ?, ?)`;
    db.query(
      sql,
      [request.body.username, request.body.password, request.body.email],
      function (error, result) {
        if (error) {
          throw error;
        }
        response.redirect(`/`);
      }
    );
  });
});

//수정
router.get("/update/:user_id", function (request, response) {
  let url = request.url.split("/");
  let userId = url[2];
  let sql = `SELECT * FROM user where user_id=?`;
  db.query(sql, [userId], function (error, data) {
    if (error) {
      throw error;
    }
    console.log(data);
    html = user_update.renderUserUpdate(
      data[0].user_id,
      data[0].username,
      data[0].email
    );
    response.send(html);
  });
});

router.post("/update_process/:user_id", function (request, response) {
  let url = request.url.split("/");
  let userId = url[2];
  console.log(request.body);
  db.query(
    `UPDATE user SET username=?, password=?, email=? WHERE user_id=?`,
    [request.body.username, request.body.password, request.body.email, userId],
    function (error, result) {
      if (error) {
        throw error;
      }
      console.log(result);
      response.redirect(`/`);
    }
  );
});

//삭제
router.post("/delete_process/:user_id", function (request, response) {
  let url = request.url.split("/");
  let userId = url[2];
  console.log(request.body);
  db.query(
    "DELETE FROM user WHERE user_id = ?",
    [userId],
    function (error, result) {
      if (error) {
        throw error;
      }
      response.redirect(`/`);
    }
  );
});

module.exports = router;