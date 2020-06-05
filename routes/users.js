var express = require('express');
var router = express.Router();
const fs = require("fs");
const usersData = "./data/users.json";


/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile(usersData, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});



module.exports = router;
