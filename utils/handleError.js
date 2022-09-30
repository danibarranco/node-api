const handleHttpError = (
  res,
  message = 'Something wrong here...',
  code = 403
) => {
  res.status(code)
  res.send({ error: message })
}

module.exports = { handleHttpError }
