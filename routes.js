var path = require("path");
var Router = require('.../routes');
var router = new Router(path.join(__dirname,'routes'));


var express = require('express'),
var router = require("express").Router(),
userCtrl = require('./user-controller');


router.get('/', (req, res) => res.send('Hello World!'));
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.delete('/users/:id', userCtrl.deleteUser);
router.put('/users/:id', userCtrl.updateUser);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;
