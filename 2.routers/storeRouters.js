var express = require("express")
var router = express.Router()
const { verifyToken } = require("../3.helpers/token")
const { storeControler } = require("../1.controlers/index")

router.get("/getlocation", storeControler.getLocation)
router.post("/addstoretostores", storeControler.addStoreToStores)
router.put("/addstoretousers", storeControler.addStoreToUsers)
router.get("/getunapprovedstores", verifyToken, storeControler.getUnapprovedStores)
router.put("/approvestoreinstores", storeControler.approveStoreInStores)
router.put("/approvestoreinusers", storeControler.approveStoreInUsers)


module.exports = router