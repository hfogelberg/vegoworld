var mongoose = require('mongoose'),
      bluebird = require('bluebird'),
      {IS_LOCAL} = require('../../config');

var dbUri = '';

if (IS_LOCAL) {
  console.log('Hooking up to dev Db');
  dbUri = 'mongodb://localhost:27017/vego'
} else {
  console.log('Hooking up to prod Db');
  dbUri = 'mongodb://haiku:1d0c29f7fdbfcb4079300dbca7962fb4@dokku-mongo-haiku:27017/vego'
}

console.log('Db connection to open: ' + dbUri);
mongoose.connect(dbUri);
mongoose.connection
    .once('open', () => {console.log('DB connection open');})
    .on('error', (err)=>{console.log('Error', err);});

mongoose.export = {mongoose};
