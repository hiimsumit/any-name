const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send("Hello it's me!")
})

app.listen(process.env.PORT || 3000)