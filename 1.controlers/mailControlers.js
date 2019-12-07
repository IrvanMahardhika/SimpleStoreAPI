const nodemailer = require("nodemailer")
const db = require("../4.database/index")
var { pdfcreate } = require("../3.helpers/html_pdf")
const fs = require("fs")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "irvan.mahardhika@gmail.com",
        pass: "qfsuvdcgssqelqdf"
    }
})

module.exports = {
    sendVerifyEmail: (req, res) => {
        let to = req.query.email
        let title
        if (req.query.gender === "male") { title = "Mr." }
        else { title = "Mrs." }
        let mailOptions = {
            from: "SimpleStore <simplestore@gmail.com>",
            to,
            subject: "Verify your SimpleStore account!",
            html: `<p>Greetings ${title} ${req.query.fullname},<br></br><br></br>
                        Please click this <a href="http://localhost:5555/mail/verifyemail?username=${req.query.username}" > link </a> to verify your SimpleStore account.<br></br>
                        Thank you.<br></br><br></br>
                        Best regards,<br></br>
                        SimpleStore team</p>`
        }
        if (to) {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err
                res.send("Email success!")
            })
        } else {
            res.send("Email empty!")
        }
    },
    verifyEmail: (req, res) => {
        let sql = `update users set emailverified = 1 where username = "${req.query.username}"`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send("Your account e-mail has been verified")
        })
    },
    sendLinkChangePasswordEmail: (req, res) => {
        let to = req.query.email
        let title
        if (req.query.gender === "male") { title = "Mr." }
        else { title = "Mrs." }
        let mailOptions = {
            from: "SimpleStore <simplestore@gmail.com>",
            to,
            subject: "Change your SimpleStore account password!",
            html: `<p>Greetings ${title} ${req.query.fullname},<br></br><br></br>
                        Please click this <a href="http://localhost:3000/Forgotpasswordend/${req.query.userId}" > link </a> to access the page to change your SimpleStore account password.<br></br>
                        Thank you.<br></br><br></br>
                        Best regards,<br></br>
                        SimpleStore team</p>`
        }
        if (to) {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err
                res.send("Email success!")
            })
        } else {
            res.send("Email empty!")
        }
    },
    sendInvoiceEmail: (req, res) => {
        let options = {
            format: "A4",
            orientation: "landscape",
            border: {
                top: "0.5in",
                left: "0.15in",
                right: "0.15in",
                bottom: "0.25in"
            }
        }
        let replacements = {
            transactionId: req.query.trandeliveryId,
            storename: req.query.storename,
            username: req.query.fullname,
            address: req.query.address,
            district: req.query.district,
            cityregency: req.query.cityregency,
            province: req.query.province,
            postalcode: req.query.postalcode,
            productcost: req.query.productcost,
            deliverycost: req.query.deliverycost,
            totalcost: req.query.totalcost,
            date: req.query.date
        }
        let to = req.query.email
        pdfcreate("./5.pdftemplates/invoice.html", replacements, options, (stream) => {
            transporter.sendMail({
                from: "SimpleStore <simplestore@gmail.com>",
                to,
                subject: `Invoice for Transaction ${req.query.trandeliveryId}`,
                html: `<p>Greetings Mr/Mrs ${req.query.fullname},<br></br><br></br>
                            This is invoice for transaction id ${req.query.trandeliveryId}.<br></br>
                            Thank you for shopping @SimpleStore.<br></br><br></br>
                            Best regards,<br></br>
                            SimpleStore team</p>`,
                attachments: [
                    {
                        filename: `Invoice for  transaction ${req.query.trandeliveryId}.pdf`,
                        content: fs.createReadStream(stream.path)
                    }
                ]
            })
        })

        res.send("Test email attachment done")
    }

}