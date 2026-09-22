//console.log("Hello Asawari lets do this !!!!");
require('dotenv').config();
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Asawari!')
})

app.get('/linkedin',(req, res)=>{
    res.send('visit - https://www.linkedin.com/in/asawari-bhagwat-217129131/?isSelfProfile=true')
})

app.get('/login',(req, res)=>{
    res.send('<h1>Please login to back end project</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})