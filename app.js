const express = require('express')
const path = require('path')
const app = express()
const http = require('http');

app.use('/',express.static(path.join(__dirname, 'dist')));
// app.get('/', function (req, res) {
//   res.send('Hello World!')
//   // res.sendFile(path.join(__dirname,'/dist/index.html'));
// })
// app.get('/dist',function(req,res){

// })
app.use('*',function(req,res){
  console.log(req);
  res.sendFile(path.join(__dirname,'dist/index.html'));
})

const port = process.env.PORT || '3000';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,()=>{console.log('Example app listening on port 3000!')})
