let api = (app, mongoose) => {
  // let {userApi} = require('./userApi'),
  //      {haikuApi} = require('./haikuApi');
  //
  // userApi(app, mongoose);
  // haikuApi(app, mongoose);

  app.get('/api/', (req, res) => {
    res.send({'message': 'API is alive'});
  });
};

module.exports = {api};
