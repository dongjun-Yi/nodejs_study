let mysql = require('mysql');
let db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'111111',
  database:'userdb'
});
db.connect();
module.exports = db;