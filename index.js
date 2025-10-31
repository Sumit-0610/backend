const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
    console.log(res);
  res.send('Hello World!')
})


app.get('/login',(req,res)=>{
    res.send('<h1>Login Successful</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Youtube</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
