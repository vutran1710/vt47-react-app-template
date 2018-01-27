const jwt = require('jsonwebtoken')

const secret = 'jwt-secret'

module.exports = (req, res, next) => {
  const token = req.get('Access-Token')

  const verifyToken = () => jwt.verify(
    token,
    secret,
    err => err ? res.status(401).json({
      error: true,
      message: 'Unable to authorize',
      err
    }) : next()
  )

  const noTokenResponse = () => res.status(403).json({
    error: true,
    message: 'Unauthorized Access'
  })

  return (token && token.length > 0) ? verifyToken() : noTokenResponse()
}
