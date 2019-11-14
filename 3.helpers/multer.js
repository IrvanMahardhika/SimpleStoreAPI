const multer = require("multer")

let multerStorageConfig1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/userpics")
    },
    filename: (req, file, cb) => {
        let d = new Date()
        cb(null, `USR_${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}_${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${file.mimetype.split("/")[1]}`)
    }
})

let uploadUserPic = multer({
    storage: multerStorageConfig1
})

let multerStorageConfig2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/productpics")
    },
    filename: (req, file, cb) => {
        let d = new Date()
        cb(null, `PRD_${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}_${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${file.mimetype.split("/")[1]}`)
    }
})

let uploadProductPic = multer({
    storage: multerStorageConfig2
})

let multerStorageConfig3 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/receivingevidencepics")
    },
    filename: (req, file, cb) => {
        let d = new Date()
        cb(null, `RCV_${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}_${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${file.mimetype.split("/")[1]}`)
    }
})

let uploadReceivingEvidencePic = multer({
    storage: multerStorageConfig3
})

module.exports = {
    uploaduserPic: uploadUserPic.single("userPic"),
    uploadproductPic: uploadProductPic.single("productPic"),
    uploadReceivingEvidencePic: uploadReceivingEvidencePic.single("receivingevidencePic")
}
