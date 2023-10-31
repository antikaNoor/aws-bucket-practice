const express = require('express')
const routes = express()
const upload = require("multer")();

const uploadController = require('../controller/imageController')

routes.post('/upload', upload.single('file'), uploadController.handleUpload);
routes.post('/delete', uploadController.handleDeleteFile);
routes.post('/deleteFolder', uploadController.handleDeleteFolder);

module.exports = routes