var express = require("express")
var router = express.Router()
const { verifyToken } = require("../3.helpers/token")
const { tranControler } = require("../1.controlers/index")

router.get("/getcart", verifyToken, tranControler.getCart)

module.exports = router