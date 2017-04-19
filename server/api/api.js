let api = (app, mongoose) => {
    let {postsApi} = require('./modules/posts');

    postsApi(app, mongoose);

  app.get('/api/', (req, res) => {
    res.send({'message': 'API is alive'});
  });
};

module.exports = {api};
