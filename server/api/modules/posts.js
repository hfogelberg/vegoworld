let postsApi = (app, mongoose)  => {

  // GET posts
  app.get('/api/posts', (req, res) => {
    console.log('GET posts');
    res.send({message: 'Fetch posts called'});
  })
}

module.exports = {postsApi}
