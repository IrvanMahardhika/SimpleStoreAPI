const db = require("../4.database/index")

module.exports = {
    getLogin : (req,res)=>{
        let sql = `select * from users where password ="${req.query.password}" and (username = "${req.query.username}" or email = "${req.query.email}" or cellphone = "${req.query.cellphone}")`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getData : (req,res)=>{
        let sql = `select * from users where userId = ${req.query.userId}`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addUser : (req,res)=>{
        let sql = `insert into users values (0,"${req.body.fullname}","${req.body.cellphone}",default,"${req.body.email}",default,"${req.body.gender}","${req.body.username}","${req.body.password}",default,default,default,default,default)`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    changePassword : (req,res)=>{
        let sql = `update users set password = "${req.body.password}" where username = "${req.body.username}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send("Your account password has been modified")
            } catch (err) {
                console.log(err)
            }
        })
    },
    verifyCellphone : (req,res)=>{
        let sql = `update users set cellphoneverified = 1 where username = "${req.body.username}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send("Your account cellphone has been verified")
            } catch (err) {
                console.log(err)
            } 
        })
    },
    addUserAddress : (req,res)=>{
        let sql = `insert into useraddress values (0,${req.body.userId},"${req.body.username}","${req.body.addressname}","${req.body.address}","${req.body.district}","${req.body.cityregency}","${req.body.province}","${req.body.postalcode}")`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getAddress : (req,res)=>{
        let sql = `select * from useraddress where username = "${req.query.username}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteAddress : (req,res)=>{
        let sql = `delete from useraddress where addressId = ${req.params.id}`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    updateProfile : (req,res)=>{
        let sql = `update users set `
        if (req.body.fullname) {sql+=`fullname = "${req.body.fullname}",`}
        if (req.body.birthdate) {sql+=`birthdate = ${req.body.birthdate},`}
        if (req.body.sex) {sql+=`gender = "${req.body.sex}",`}
        sql = sql.slice(0,-1)
        sql+=` where userId = "${req.body.userId}"`
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