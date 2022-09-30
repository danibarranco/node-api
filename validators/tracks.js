const { check } = require('express-validator')
const { validateResults } = require('../utils/handleValidator')

const createTrackValidator = [
  check('name').exists().notEmpty().isString(),
  check('album').exists().notEmpty().isString(),
  check('cover').exists().notEmpty().isString(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  check('mediaId').exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next)
]

const findTrackValidator = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { createTrackValidator, findTrackValidator }
