var express = require("express")
var router = express.Router()
const { storeControler } = require("../1.controlers/index")

router.get("/getlocation", storeControler.getLocation)
router.post("/addstoretostores", storeControler.addStoreToStores)
router.put("/addstoretousers", storeControler.addStoreToUsers)


module.exports = router