const authRouter = require("./authRouters")
const mailRouter = require("./mailRouters")
const storeRouter = require("./storeRouters")
const uploadPicRouter = require("./uploadPicRouters")
const productRouter = require("./productRouters")
const tranRouter = require("./tranRouters")

module.exports = {
    authRouter,
    mailRouter,
    storeRouter,
    uploadPicRouter,
    productRouter,
    tranRouter
}