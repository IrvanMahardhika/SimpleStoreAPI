var express = require("express")
var router = express.Router()
const {mailControler} = require("../1.controlers/index")

router.get("/sendverifyemail", mailControler.sendVerifyEmail)
router.get("/verifyemail", mailControler.verifyEmail)
router.get("/sendlinkchangepasswordemail", mailControler.sendLinkChangePasswordEmail)

module.exports = router