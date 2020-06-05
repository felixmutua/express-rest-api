var express = require('express');
var router = express.Router();
const fs = require("fs");
const usersData = "./data/users.json";

/* GET user. */
router.get('/', function(req, res, next) {
    console.log(req.params.id);
    fs.readFile(usersData, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        const users = JSON.parse(data);
    });

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === req.params.id) {
            res.send(users[i]);
        }
    }
});

module.exports = router;