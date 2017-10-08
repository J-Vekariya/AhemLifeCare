const express = require('express')
const app = express()
app.use('/dist',express.static('/dist'));
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})