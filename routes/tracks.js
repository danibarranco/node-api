const { createTrackValidator, findTrackValidator } = require('../validators/tracks')

const express = require('express')
const router = express.Router()
const {
  deleteTrack,
  getTracks,
  findTrack,
  updateTrack,
  createTrack
} = require('../controllers/tracks')

router.get('/', getTracks)

router.get('/:id', findTrackValidator, findTrack)

router.post('/', createTrackValidator, createTrack)

router.delete('/:id', findTrackValidator, deleteTrack)

router.put('/:id', findTrackValidator, createTrackValidator, updateTrack)

module.exports = router
