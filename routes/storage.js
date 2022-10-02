const express = require('express')
const router = express.Router()
const {
  createFile,
  getFiles,
  findFile,
  deleteFile,
  updateFile
} = require('../controllers/storage')
const { uploadMiddleware } = require('../utils/handleStorage')
const { findFileValidator } = require('../validators/storage')

/**
 * Files list
 */
router.get('/', getFiles)

/**
 * File detail
 */
router.get('/:id', findFileValidator, findFile)

/**
 * File delete
 */
router.delete('/:id', findFileValidator, deleteFile)

/**
 * File update
 */
router.put('/:id', uploadMiddleware.single('file'), findFileValidator, updateFile)

/**
 * File create
 */
router.post('/', uploadMiddleware.single('file'), createFile)

module.exports = router
