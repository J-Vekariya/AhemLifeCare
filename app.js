const express = require('express')
const path = require('path')
const app = express()
app.use('dist',express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
  res.send('Hello World!')
})
// app.get('/dist',function(req,res){

// })
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})