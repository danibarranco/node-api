const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const data = ['users', 'jaja']
  res.send(data)
})

module.exports = router
