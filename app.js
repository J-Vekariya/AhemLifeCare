const express = require('express')
const path = require('path')
const app = express()
const http = require('http');

app.use('/',express.static(path.join(__dirname, 'dist')));

app.get('/api/data',(req,res)=>{
  console.log('Data');
  res.send('data');
})

app.use('*',function(req,res){
  // console.log(req);
  res.sendFile(path.join(__dirname,'dist/index.html'));
})
const port = process.env.PORT || '3000';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,()=>{console.log('Example app listening on port 3000!')})
