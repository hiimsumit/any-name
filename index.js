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
        console.log('testing',"testing first console")
        console.log('testing2','testing the second console log')
        res.send("success")
    }else{
        res.send("login failed")
        console.log('testing3',"testing third console")
        console.log('testing4','testing fourth console log')
    }
})