const db = require("../4.database/index")

module.exports = {
    getCart: (req, res) => {
        let sql = `select cartId, cart.userId, cart.productId, qty, checkoutqty, note, category, brand, name, price, productpic1, start, end, discpercent, discvalue, inventory, measurement, weight, stores.storename, store_cityregency from cart join products on cart.productId=products.productId join checkout on products.productId = checkout.productId join stores on stores.storename = products.storename left join markdowns on markdowns.productId = products.productId where cart.userId = ${req.query.userId}`
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
        let sql = `select cartId, cartnonlogin.userId, cartnonlogin.productId, qty, checkoutqty, note, category, brand, name, price, productpic1, start, end, discpercent, discvalue, inventory, measurement, weight, stores.storename, store_cityregency from cartnonlogin join products on cartnonlogin.productId = products.productId join checkout on products.productId = checkout.productId join stores on stores.storename = products.storename left join markdowns on markdowns.productId = products.productId where cartnonlogin.userId = ${req.query.userId}`
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
    },

    getCheckoutQty: (req, res) => {
        let sql = `select * from checkout where productId = "${req.query.productId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    changeCheckoutQty: (req, res) => {
        let sql = `update checkout set checkoutqty = "${req.body.checkoutqty}" where productId = "${req.body.productId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },

    addTranDetail: (req, res) => {
        let sql = `insert into trandetail values (0,"${req.body.tranpaymentId}","${req.body.trandeliveryId}","${req.body.productId}",${req.body.qty},${req.body.price},`
        if (req.body.discpercent) {
            sql += `${req.body.discpercent},`
        } else {
            sql += `default,`
        }
        if (req.body.discvalue) {
            sql += `${req.body.discvalue},`
        } else {
            sql += `default,`
        }
        sql += `${req.body.priceafterdisc},${req.body.totalprice})`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addTranPayment: (req, res) => {
        let sql
        if (req.body.bankdest) {
            sql = `insert into tranpayment values (0,"${req.body.trandate}","${req.body.userId}","${req.body.email}","${req.body.type}",default,"${req.body.bankdest}",default,default,default,default,default,${req.body.productcost},${req.body.deliverycost},${req.body.totalcost},"${req.body.status}")`
        } else {
            sql = `insert into tranpayment values (0,"${req.body.trandate}","${req.body.userId}","${req.body.email}","${req.body.type}","${req.body.bankori}",default,"${req.body.name}","${req.body.number}","${req.body.expiry}","${req.body.securitycode}",default,${req.body.productcost},${req.body.deliverycost},${req.body.totalcost},"${req.body.status}")`
        }
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addTranDelivery: (req, res) => {
        let sql = `insert into trandelivery values (0,"${req.body.dest_address}","${req.body.dest_district}","${req.body.dest_cityregency}","${req.body.dest_province}","${req.body.dest_postalcode}",default)`
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