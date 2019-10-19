const multer = require('multer');
const uploadConfig = require('../../uploadConfig');

const PostController = require('../../models/Post/controller');

const routes = require('express').Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('postThumb'), PostController.store);

module.exports = routes;