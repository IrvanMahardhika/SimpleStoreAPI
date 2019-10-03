const db = require("../4.database/index")

module.exports = {
    getLogin : (req,res)=>{
        let sql = `select * from users where username = "${req.query.username}" or email = "${req.query.email}" or cellphone = "${req.query.cellphone}"`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },
    addUser : (req,res)=>{
        let sql = `insert into users values (0,"${req.body.fullname}","${req.body.cellphone}",default,"${req.body.email}",default,"${req.body.gender}","${req.body.username}","${req.body.password}",default,default,default)`
        db.query(sql, (err,result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
                
            }
        })
    },
    changePassword : (req,res)=>{
        let sql = `update users set password = "${req.body.password}" where username = "${req.body.username}"`
        db.query(sql, (err,result)=>{
            if (err) throw err
            res.send("Your account password has been modified")
        })
    },
    verifyCellphone : (req,res)=>{
        let sql = `update users set cellphoneverified = 1 where username = "${req.body.username}"`
        db.query(sql, (err,result)=>{
            if (err) throw err
            res.send("Your account cellphone has been verified")
        })
    }
}