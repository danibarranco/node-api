const express = require('express')
const router = express.Router()
const { createFile } = require('../controllers/storage')
const { uploadMiddleware } = require('../utils/handleStorage')

router.post('/', uploadMiddleware.single('file'), createFile)

module.exports = router
