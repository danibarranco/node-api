const multer = require('multer')
const path = require('path')
const PATH_STORAGE = path.join(__dirname, '/../storage')

/**
 * Configure diskStorage with multer
 */
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, PATH_STORAGE)
  },
  filename: (req, file, callBack) => {
    const ext = file.originalname.split('.').pop()
    const fileName = `file-${Date.now()}.${ext}`
    callBack(null, fileName)
  }
})

const uploadMiddleware = multer({ storage })

module.exports = { uploadMiddleware }
