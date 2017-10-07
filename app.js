const express = require('express')
const app = express()
app.use(express.static('dist'))
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT,process.env.IP, function () {
  console.log('Example app listening on port 3000!')
})