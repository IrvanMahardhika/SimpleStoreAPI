var express = require("express")
var router = express.Router()
const {productControler} = require("../1.controlers/index")
const {verifyToken} = require("../3.helpers/token")

router.get("/getproductbyid", verifyToken, productControler.getProductById)
router.post("/addproduct", productControler.addProduct)
router.put("/addproductfinal", productControler.addProductFinal)
router.put("/deleteproduct", productControler.deleteProduct)
router.get("/getapprovedproduct", verifyToken, productControler.getApprovedProduct)
router.get("/getunapprovedproduct", verifyToken, productControler.getUnapprovedProduct)


module.exports = router