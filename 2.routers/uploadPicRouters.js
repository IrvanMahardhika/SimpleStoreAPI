var express = require("express")
var router = express.Router()
const { uploadPicControler } = require("../1.controlers/index")
const { uploaduserPic, uploadproductPic, uploadReceivingEvidencePic, uploadTransferEvidencePic } = require("../3.helpers/multer")

router.put("/uploaduserpic", uploaduserPic, uploadPicControler.uploadUserPic)
router.put("/deleteuserpic", uploadPicControler.deleteUserPic)
router.put("/uploadproductpic1", uploadproductPic, uploadPicControler.addProductPic1)
router.put("/uploadproductpic2", uploadproductPic, uploadPicControler.addProductPic2)
router.put("/uploadproductpic3", uploadproductPic, uploadPicControler.addProductPic3)
router.put("/uploadreceivingevidencepic", uploadReceivingEvidencePic, uploadPicControler.addReceivingEvidencePic)
router.put("/uploadtransferevidencepic", uploadTransferEvidencePic, uploadPicControler.addTransferEvidencePic)

module.exports = router
