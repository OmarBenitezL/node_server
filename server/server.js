require('../config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
  res.send('get Hello World')
});

app.post('/usuario', function (req, res) {
  let body = req.body;
  if(body.name === undefined){
    res.status(400).json({ok:false,error:'falta nombre'});
  }else{
    res.json({body})
  }
});

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({id})
});

app.delete('/usuario', function (req, res) {
  res.send('delete Hello World')
});


app.listen(process.env.PORT, () => {
  console.log(`escuchando en puerto  ${process.env.PORT}`);
})