const db = require("../4.database/index")
const fs = require("fs")


module.exports = {
    uploadUserPic : (req,res)=>{
        try {
            let data = JSON.parse(req.body.data)
            let sql = `update users set userpic = "${req.file.path}" where username = "${data.username}"`
            db.query(sql,(err,result)=>{
                if (err) throw err
                res.send("Success")
            })
        } catch (error) {
            fs.unlinkSync(req.file.path)
            console.log(error)
        }
    },
    deleteUserPic : (req,res)=>{
        let sql = `update users set userpic = default where username = "${req.body.username}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send("Your userpic has been deleted")
            } catch (err) {
                console.log(err)
            }
        })
    },
    addProductPic1 : (req,res)=>{
        try {
            let data = JSON.parse(req.body.data)
            let sql = `update products set productpic1 = "${req.file.path}" where productId = ${data.productId}`
            db.query(sql,(err,result)=>{
                if (err) throw err
                res.send("Success")
            })
        } catch (error) {
            fs.unlinkSync(req.file.path)
            console.log(error)
        }
    },
    addProductPic2 : (req,res)=>{
        try {
            let data = JSON.parse(req.body.data)
            let sql = `update products set productpic2 = "${req.file.path}" where productId = ${data.productId}`
            db.query(sql,(err,result)=>{
                if (err) throw err
                res.send("Success")
            })
        } catch (error) {
            fs.unlinkSync(req.file.path)
            console.log(error)
        }
    },
    addProductPic3 : (req,res)=>{
        try {
            let data = JSON.parse(req.body.data)
            let sql = `update products set productpic3 = "${req.file.path}" where productId = ${data.productId}`
            db.query(sql,(err,result)=>{
                if (err) throw err
                res.send("Success")
            })
        } catch (error) {
            fs.unlinkSync(req.file.path)
            console.log(error)
        }
    }
}
