var express = require("express")
var router = express.Router()
const {authControler} = require("../1.controlers/index")

router.get("/getlogin", authControler.getLogin)
router.post("/adduser", authControler.addUser)
router.put("/changepassword", authControler.changePassword)
router.put("/verifycellphone", authControler.verifyCellphone)

module.exports = router