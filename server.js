var express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Express server is up on port ' + port);
});
