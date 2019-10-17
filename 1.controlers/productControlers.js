const db = require("../4.database/index")

module.exports = {
    getProductById : (req,res)=>{
        let sql = `select * from products where productId = "${req.query.productId}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProduct : (req,res)=>{
        let sql = `insert into products values (0,"${req.body.storename}",default,default,default,default,default,default,default,default,default,default,"${req.body.addeddate}",default)`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProductFinal : (req,res)=>{   
        let sql = `update products set category = "${req.body.category}", brand = "${req.body.brand}", inventory = ${req.body.inventory}, measurement = "${req.body.measurement}", name = "${req.body.name}", description = "${req.body.description}", price = ${req.body.price} where productId = ${req.body.productId}`
        db.query(sql,(err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteProduct : (req,res)=>{
        let sql = `delete from products where productId = ${req.params.id}`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    } 
}