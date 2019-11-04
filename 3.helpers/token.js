let jwt = require("jsonwebtoken")
const appKey = "secretKey"

module.exports = {
    getToken: (req, res) => {
        let { username } = req.body
        let token = jwt.sign({ username }, appKey, { expiresIn: "12h" })
        console.log(token)
        console.log(username)
        res.send({
            username,
            token
        })
    },
    verifyToken: (req, res, next) => {
        if (req.method !== "OPTIONS") {
            console.log(req.headers.authorization)
            jwt.verify(req.headers.authorization, appKey, (error, decoded) => {
                if (error) {
                    return res.status(401).json({ message: "User not authorized.", error: "User not authorized." })
                }
                console.log({ decoded })
                req.user = decoded
                next()
            })
        } else {
            next()
        }
    }
}

