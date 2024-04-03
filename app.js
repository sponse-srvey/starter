const express = require("express")

const app = express()

app.get('/', function(req,res){
  res.send('<h1>Главная страница</h1>')
})

app.get('/about',function(request, response){

response.send('<h1></h1> сайты</h1>');
})

app.get('/con',function(req, res){

  response.send('<h1> Контакты</h1>');
})
app.listen(3000);