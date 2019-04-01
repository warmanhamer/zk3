/*
 * @Author: mikey.gwx 
 * @Date: 2019-04-01 08:55:42 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-04-01 10:05:19
 * 
 */
var Mongo = require("mongodb-curd");
var dName = "zk3";
var cName = "list";
module.exports = {
    getlist(req, res, next) {
        let { type } = req.query;
        Mongo.find(dName, cName, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    }
}