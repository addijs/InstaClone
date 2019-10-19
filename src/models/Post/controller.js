const Post = require('./model');

module.exports = {
  async index(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { user, description } = req.body

    await Post.create({
      user,
      postThumb: filename,
      description
    });

    return res.json({ ok: true });
  }
}