const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send("Hello it's Sumit!")
})

app.listen(process.env.PORT || 3000)

let passwords = new Map()
passwords.set('sumit@gmail.com','pwd')
app.get('/login', (req,res) => {
    if(passwords.get(req.query.username) === req.query.password){
        console.log('passwords.get(req.query.username',passwords.get(req.query.username))\]
        console.log('req.query.password',req.query.password)
        res.send("success")
    }else{
        res.send("login failed")
    }
})