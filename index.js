const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send("Hello it's Sumit!")
})

app.listen(process.env.PORT || 3000)

let passwords = new Map()
passwords.set('sumit@gmail.com','pwd')
passwords.set('bob@gmail.com','hello')
app.get('/login', (req,res) => {
    if(passwords.get(req.query.username) === req.query.password){
        console.log("if statement 1", passwords.get(req.query.username))
        console.log('if statement 2',req.query.password)
        res.send("success")
    }else{
        res.send("login failed")
        console.log("else statement 1", passwords.get(req.query.username))
        console.log('else statement 2',req.query.password)
    }
})