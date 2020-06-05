var express = require('express');
var router = express.Router();
const fs = require("fs");
const usersData = "./data/users.json";


/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(usersData, "utf8", (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});
/* GET user. */
router.get('/:id', function (req, res, next) {
    let usersArray = [];
    fs.readFile(usersData, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        usersArray = JSON.parse(data);
    });
    usersArray.forEach(function (user) {
        if (user.id === req.params.id) {
            console.log(user);
            res.send(user)
        } else {
            res.send("User Not Found");
        }
    });
});


module.exports = router;
