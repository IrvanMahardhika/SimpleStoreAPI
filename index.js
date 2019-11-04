var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
const port = 5555

const { authRouter, mailRouter, storeRouter, uploadPicRouter, productRouter, tranRouter } = require("./2.routers/index")


app.use(bodyParser.json())
app.use(cors())
app.use("/auth", authRouter)
app.use("/mail", mailRouter)
app.use("/store", storeRouter)
app.use("/upload", uploadPicRouter)
app.use("/prod", productRouter)
app.use("/tran", tranRouter)
app.use("/images", express.static("images"))


app.get("/", (req, res) => {
    res.send(`<h1>SimpleStore API</h1>`)
})





app.listen(port, () => console.log("listening in port " + port));
