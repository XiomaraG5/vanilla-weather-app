// http://openweathermap.org/img/w/10m.png
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;
// handlebars
app.use( express.static('views')) // por defecto lee el index


app.get('/',(req, res) =>{
  res.sendFile( __dirname + '/public/index')
})
 app.get('*', (req, res)=> {
   res.sendFile( __dirname + '/public/index')
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})