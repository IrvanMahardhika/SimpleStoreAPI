const db = require("../4.database/index")

module.exports = {
    getLogin: (req, res) => {
        let sql = `select * from users where password ="${req.query.password}" and (username = "${req.query.username}" or email = "${req.query.email}" or cellphone = "${req.query.cellphone}")`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getData: (req, res) => {
        let sql = `select * from users where userId = ${req.query.userId}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    checkUser: (req, res) => {
        let sql = `select email, username, cellphone from users where email = "${req.query.email}" or username = "${req.query.username}" or cellphone = "${req.query.cellphone}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addUser: (req, res) => {
        let sql = `insert into users values (0,"${req.body.fullname}","${req.body.cellphone}",default,"${req.body.email}",default,"${req.body.gender}","${req.body.username}","${req.body.password}",default,default,default,default,default)`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getUserByEmail: (req, res) => {
        let sql = `select userId, email, gender, fullname from users where email = "${req.query.email}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    changePassword: (req, res) => {
        let sql = `update users set password = "${req.body.password}" where userId = "${req.body.userId}" and username = "${req.body.username}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    verifyCellphone: (req, res) => {
        let sql = `update users set cellphoneverified = 1 where username = "${req.body.username}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addUserAddress: (req, res) => {
        let sql = `insert into useraddress values (0,${req.body.userId},"${req.body.username}","${req.body.addressname}","${req.body.address}","${req.body.district}","${req.body.cityregency}","${req.body.province}","${req.body.postalcode}")`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    getAddress: (req, res) => {
        let sql = `select * from useraddress where username = "${req.query.username}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteAddress: (req, res) => {
        let sql = `delete from useraddress where addressId = ${req.params.id}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    updateProfile: (req, res) => {
        let sql = `update users set `
        if (req.body.fullname) { sql += `fullname = "${req.body.fullname}",` }
        if (req.body.birthdate) { sql += `birthdate = ${req.body.birthdate},` }
        if (req.body.sex) { sql += `gender = "${req.body.sex}",` }
        sql = sql.slice(0, -1)
        sql += ` where userId = "${req.body.userId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    addUserPayment: (req, res) => {
        let sql
        if (req.body.expiry && req.body.securitycode) {
            sql = `insert into userpayment values (0,${req.body.userId},"${req.body.type}","${req.body.bank}","${req.body.name}","${req.body.number}","${req.body.expiry}",${req.body.securitycode})`
        } else {
            sql = `insert into userpayment values (0,${req.body.userId},"${req.body.type}","${req.body.bank}","${req.body.name}","${req.body.number}",default,default)`
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
    getPayment: (req, res) => {
        let sql = `select * from userpayment where userId = "${req.query.userId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deletePayment: (req, res) => {
        let sql = `delete from userpayment where paymentId = ${req.params.id}`
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