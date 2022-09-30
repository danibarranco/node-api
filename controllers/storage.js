const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
/**
 * Get files list
 * @param {*} req
 * @param {*} res
 */
const getFiles = async (req, res) => {
  const data = await storageModel.find({})
  res.send({ data })
}

/**
 * Get one file
 * @param {*} req
 * @param {*} res
 */
const findFile = (req, res) => {}

/**
 * Create file
 * @param {*} req
 * @param {*} res
 */
const createFile = async (req, res) => {
  const { file } = req
  try {
    const data = await storageModel.create({
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    })

    res.send({ data })
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

/**
 * Delete file
 * @param {*} req
 * @param {*} res
 */
const deleteFile = (req, res) => {}

/**
 * Update file
 * @param {*} req
 * @param {*} res
 */
const updateFile = (req, res) => {}

module.exports = {
  getFiles,
  findFile,
  createFile,
  deleteFile,
  updateFile
}
