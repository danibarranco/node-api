const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Get tracks list
 * @param {*} req
 * @param {*} res
 */
const getTracks = async (req, res) => {
  try {
    const data = await tracksModel.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

/**
 * Get one track
 * @param {*} req
 * @param {*} res
 */
const findTrack = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

/**
 * Create track
 * @param {*} req
 * @param {*} res
 */
const createTrack = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message, 400)
  }
}

/**
 * Delete track
 * @param {*} req
 * @param {*} res
 */
const deleteTrack = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.deleteOne({ _id: id })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message)
  }
}

/**
 * Update track
 * @param {*} req
 * @param {*} res
 */
const updateTrack = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, error.message, 400)
  }
}

module.exports = {
  getTracks,
  findTrack,
  createTrack,
  deleteTrack,
  updateTrack
}
