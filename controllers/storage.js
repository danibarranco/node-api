const fs = require('fs')
const { matchedData } = require('express-validator')
const { storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const path = require('path')

const PUBLIC_URL = process.env.PUBLIC_URL
const PATH_STORAGE = path.join(__dirname, '/../storage')

/**
 * Get files list
 * @param {*} req
 * @param {*} res
 */
const getFiles = async (req, res) => {
  try {
    const data = await storageModel.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

/**
 * Get one file
 * @param {*} req
 * @param {*} res
 */
const findFile = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storageModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

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
    handleHttpError(res, error.message, 400)
  }
}

/**
 * Delete file
 * @param {*} req
 * @param {*} res
 */
const deleteFile = async (req, res) => {
  try {
    const { id } = matchedData(req)

    // First unlink the file from server
    const data = await storageModel.findById(id)
    if (!data) throw Error('File not exist')
    fs.unlinkSync(path.join(PATH_STORAGE, data.filename))

    // Then delete de storage entry
    const deleteRes = await storageModel.deleteOne({ _id: id })
    res.send({ deleteRes })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

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
