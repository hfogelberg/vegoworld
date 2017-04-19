let postsApi = (app, mongoose)  => {
  let {Posts} = require('../../db/models/posts.js');

  // GET posts
  app.get('/api/posts', (req, res) => {
    console.log('GET posts');
    res.send({message: 'Fetch posts called'});
  })

  // POST posts
  app.post('/api/posts', (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let tags = req.body.tags;
    let postType = req.body.postType;
    let created = new Date();

    let post = new Posts({
      title,
      body,
      tags,
      postType,
      created
    });

    post.save().then((post) => {
      res.send({'message': 'OK'});
    })
    .catch((err)=> {
      console.log('Error saving post', err);
      res.status(500).send();
    });
  });
}

module.exports = {postsApi}
