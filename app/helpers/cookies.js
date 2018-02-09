const logger = require('./../utils/logger')

// Sets a cookie
const set = (
  name,
  value,
  res,
  isSecure = true,
) => {
  logger.log('Setting secure cookie')

  res.cookie(
    name,
    value,
    {
      maxAge: parseInt(3600 * 60), // Invalidate cookie after 1 hour
      secure: isSecure,
    },
  )
}

// Retrievs a cookie
const get = (name, req) => {
  logger.log('Retrievs cookie')

  return req.cookies[name]
}

module.exports = {
  get,
  set,
}
