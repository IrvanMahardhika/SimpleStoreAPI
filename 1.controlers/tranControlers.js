const db = require("../4.database/index")

module.exports = {
    getCart: (req, res) => {
        let sql = `select * from cart join products on cart.productId = products.productId left join markdowns on markdowns.productId = products.productId where userId=${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addToCart: (req, res) => {
        let sql = `insert into cart values (0,${req.body.userId},${req.body.productId},${req.body.qty},"${req.body.note}")`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    checkCart: (req, res) => {
        let sql = `select * from cart where productId = ${req.query.productId} and userId = ${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    updateCart: (req, res) => {
        let sql = `update cart set qty = ${req.body.qty} where productId = ${req.body.productId} and userId = ${req.body.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteCart: (req, res) => {
        let sql = `delete from cart where cartId = ${req.params.id}`
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