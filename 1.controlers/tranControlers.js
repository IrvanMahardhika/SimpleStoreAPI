const db = require("../4.database/index")

module.exports = {
    getCart: (req, res) => {
        let sql = `select cartId, userId, cart.productId, qty, note, category, brand, name, price, productpic1, start, end, discpercent, discvalue, inventory, measurement from cart join products on cart.productId = products.productId left join markdowns on markdowns.productId = products.productId where userId=${req.query.userId}`
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
        let sql = `update cart set qty = ${req.body.qty}, note = "${req.body.note}" where productId = ${req.body.productId} and userId = ${req.body.userId}`
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
    },

    getCartNonLogin: (req, res) => {
        let sql = `select cartId, cartnonlogin.userId, cartnonlogin.productId, qty, note, category, brand, name, price, productpic1, start, end, discpercent, discvalue, inventory, measurement, weight, stores.storename, store_cityregency from cartnonlogin join products on cartnonlogin.productId = products.productId join stores on stores.storename = products.storename left join markdowns on markdowns.productId = products.productId where cartnonlogin.userId = ${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addToCartNonLogin: (req, res) => {
        let sql = `insert into cartnonlogin values (0,${req.body.userId},${req.body.productId},${req.body.qty},"${req.body.note}")`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    checkCartNonLogin: (req, res) => {
        let sql = `select * from cartnonlogin where productId = ${req.query.productId} and userId = ${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    updateCartNonLogin: (req, res) => {
        let sql = `update cartnonlogin set qty = ${req.body.qty}, note = "${req.body.note}" where productId = ${req.body.productId} and userId = ${req.body.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteCartNonLogin: (req, res) => {
        let sql = `delete from cartnonlogin where cartId = ${req.params.id}`
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