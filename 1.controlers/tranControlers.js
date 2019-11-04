const db = require("../4.database/index")

module.exports = {
    getCart: (req, res) => {
        let sql = `select * from cart where userId = ${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    }
}