var express = require('express');
var router = express.Router();
var indexApi = require("./indexApi");

/* GET home page. */
router.get('/api/getlist', indexApi.getlist);

module.exports = router;