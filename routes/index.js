const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname

fs.readdirSync(PATH_ROUTES).forEach(file => {
  const name = removeExtension(file)
  if (name !== 'index') router.use(`/${name}`, require(`./${file}`))
})

function removeExtension (file) {
  return file.split('.').shift()
}

module.exports = router
