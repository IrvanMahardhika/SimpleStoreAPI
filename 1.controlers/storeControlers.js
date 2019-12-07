const db = require("../4.database/index")

module.exports = {
    getLocation: (req, res) => {
        let sql = `select * from postalcode where postalcode = ${req.query.postalcode}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },
    addStoreToStores: (req, res) => {
        let sql = `insert into stores values (0,"${req.body.name}","${req.body.address}","${req.body.district}","${req.body.cityregency}","${req.body.province}","${req.body.postalcode}",default,${req.body.userid})`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },
    addStoreToUsers: (req, res) => {
        let sql = `update users set storename = "${req.body.name}" where userId = ${req.body.userid}`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },

    getUnapprovedStores: (req, res) => {
        let sql = `select * from stores join users on stores.storename = users.storename where stores.storeapproval = 0`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err);
            }
        })
    },
    approveStoreInStores: (req, res) => {
        let sql = `update stores set storeapproval = 1 where storeId = "${req.body.storeId}"`
        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    approveStoreInUsers: (req, res) => {
        let sql = `update users set storeapproval = 1 where userId = "${req.body.userId}"`
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