var express = require("express")
var router = express.Router()
const { getToken, verifyToken } = require("../3.helpers/token")
const { authControler } = require("../1.controlers/index")

router.post("/gettoken", getToken)
router.get("/getlogin", authControler.getLogin)
router.get("/getdata", verifyToken, authControler.getData)
router.get("/checkuser", authControler.checkUser)
router.post("/adduser", authControler.addUser)
router.get("/getuserbyemail", authControler.getUserByEmail)
router.put("/changepassword", authControler.changePassword)
router.put("/verifycellphone", authControler.verifyCellphone)
router.post("/adduseraddress", authControler.addUserAddress)
router.get("/getaddress", verifyToken, authControler.getAddress)
router.delete("/deleteaddress/:id", authControler.deleteAddress)
router.put("/updateprofile", authControler.updateProfile)
router.post("/adduserpayment", authControler.addUserPayment)
router.get("/getpayment", verifyToken, authControler.getPayment)
router.delete("/deletepayment/:id", authControler.deletePayment)



module.exports = router