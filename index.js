var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('./server/db/mongoose'),
      {api} = require('./server/api/api'),
      settings = require('./config'),
      port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/'));
api(app, mongoose);

app.listen(port, ()=>{
  'App listening on port ' + port
});
