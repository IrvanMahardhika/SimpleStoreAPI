var express = require("express")
var router = express.Router()
const { verifyToken } = require("../3.helpers/token")
const { tranControler } = require("../1.controlers/index")

router.get("/getcart", verifyToken, tranControler.getCart)
router.post("/addtocart", tranControler.addToCart)
router.get("/checkcart", verifyToken, tranControler.checkCart)
router.put("/updatecart", tranControler.updateCart)
router.delete("/deletecart/:id", tranControler.deleteCart)

router.get("/getcartnonlogin", tranControler.getCartNonLogin)
router.post("/addtocartnonlogin", tranControler.addToCartNonLogin)
router.get("/checkcartnonlogin", tranControler.checkCartNonLogin)
router.put("/updatecartnonlogin", tranControler.updateCartNonLogin)
router.delete("/deletecartnonlogin/:id", tranControler.deleteCartNonLogin)

router.get("/getcheckoutqty", tranControler.getCheckoutQty)
router.put("/changecheckoutqty", tranControler.changeCheckoutQty)

router.post("/addtrandetail", tranControler.addTranDetail)
router.post("/addtranpayment", tranControler.addTranPayment)
router.post("/addtrandelivery", tranControler.addTranDelivery)

router.get("/getuserorder", verifyToken, tranControler.getUserOrder)
router.get("/getstoretransaction", verifyToken, tranControler.getStoreTransaction)
router.get("/getreceivingevidencepic", verifyToken, tranControler.getReceivingEvidencePic)

router.put("/updatejnereceipt", tranControler.updateJNEreceipt)
router.put("/updatetranstatus", tranControler.updateTranStatus)

module.exports = router