
const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "bumzq9wsad9xhj5kq8xv-mysql.services.clever-cloud.com",
  user: "u2ssjodaigs2l0vg",
  password: "U8Xiy6ufCeUhghsDdHUx",
  database: "bumzq9wsad9xhj5kq8xv",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("SELECT * FROM users", function (err, result) {
    if (err) throw err;
    console.log("User data:");
    console.log(result);
  });

  con.end();
});

