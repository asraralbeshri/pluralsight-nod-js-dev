var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req,res){
/*var pathAdd=path.join(__dirname,'../src/index.html');
console.log(__dirname);
console.log(pathAdd);*/
//dirname --> shows the working directory.
//join function --> to creat the path by joing the following arguments.
res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
if(err){
  console.log(err);
}else{
  open('http://localhost:'+port);
}
});
