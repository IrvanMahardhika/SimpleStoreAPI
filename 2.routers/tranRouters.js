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

module.exports = router