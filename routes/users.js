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
    fs.readFile(usersData, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        console.log(req.params);
        JSON.parse(data).map(function (user) {
            if (user.id == req.params.id) {
                res.send(user);
                res.end();
            }
        });
        res.send("user not found");


    });


});


module.exports = router;
