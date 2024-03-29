const db = require("../4.database/index")

module.exports = {
    getProductById: (req, res) => {
        let sql = `select * from products where productId = "${req.query.productId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProduct: (req, res) => {
        let sql = `insert into products values (0,"${req.body.storename}",default,default,default,default,default,default,default,default,default,default,default,default,default,"${req.body.addeddate}",default,default)`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProductFinal: (req, res) => {
        let sql = `update products set category = "${req.body.category}", brand = "${req.body.brand}", inventory = ${req.body.inventory}, measurement = "${req.body.measurement}", name = "${req.body.name}", color = "${req.body.color}", weight = "${req.body.weight}", dimension = "${req.body.dimension}", description = "${req.body.description}", price = ${req.body.price} where productId = ${req.body.productId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteProduct: (req, res) => {
        let sql = `update products set productapproval = "3" where productId = ${req.body.productId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getApprovedProduct: (req, res) => {
        let sql = `select * from products where storename="${req.query.storename}" and productapproval = "1"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getUnapprovedProduct: (req, res) => {
        let sql = `select * from products where storename="${req.query.storename}" and productapproval = "0"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addMarkdown: (req, res) => {
        let sql = `insert into markdowns values (0,"${req.body.markdownname}","${req.body.start}","${req.body.end}",default,default,default)`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addMarkDownFinal: (req, res) => {
        let sql = `update markdowns set productId = "${req.body.productId}",`
        if (req.body.discpercent) { sql += ` discpercent = ${req.body.discpercent},` }
        if (req.body.discvalue) { sql += ` discvalue = ${req.body.discvalue},` }
        sql = sql.slice(0, -1)
        sql += ` where markdownId = ${req.body.markdownId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getMarkdown: (req, res) => {
        let sql = `select markdownId, start, end, discpercent, discvalue, category, brand, inventory, measurement, name, productpic1, price from markdowns join products on markdowns.productId = products.productId where markdownname="${req.query.markdownname}" and storename="${req.query.storename}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteMarkdown: (req, res) => {
        let sql = `delete from markdowns where markdownId = ${req.params.id}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    checkMarkdown: (req, res) => {
        let sql = `select markdownname, start, end, brand, name from markdowns join products on markdowns.productId = products.productId where storename="${req.query.storename}" and markdowns.productId="${req.query.productId}" and "${req.query.start}"<=end and "${req.query.end}">=start`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getNewProducts: (req, res) => {
        let sql = `select products.productId, brand, name, price, productpic1, stores.storename, store_cityregency, start, end, discpercent, discvalue, sales, measurement from products join stores on stores.storename = products.storename left join markdowns on products.productId = markdowns.productId where productapproval = "1" and inventory > 0 order by products.productId desc limit 15`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getBestSellingProducts: (req, res) => {
        let sql = `select products.productId, brand, name, price, productpic1, stores.storename, store_cityregency, start, end, discpercent, discvalue, sales, measurement from products join stores on stores.storename = products.storename left join markdowns on products.productId = markdowns.productId where productapproval = "1" and inventory > 0 order by sales desc limit 15`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getProductDetail: (req, res) => {
        let sql = `select * from products join checkout on products.productId = checkout.productId join stores on stores.storename = products.storename left join markdowns on products.productId = markdowns.productId where products.productId = "${req.query.productId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    changeProductInventory: (req, res) => {
        let sql = `update products set inventory = ${req.body.inventory}, sales = ${req.body.sales} where productId = ${req.body.productId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getUnapprovedProductForApproval: (req, res) => {
        let sql = `select * from products where productapproval = "0"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProductIntoCheckout: (req, res) => {
        let sql = `insert into checkout values (${req.body.productId},0)`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    approveProduct: (req, res) => {
        let sql = `update products set productapproval = 1 where productId = ${req.body.productId}`
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