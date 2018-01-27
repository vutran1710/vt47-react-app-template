const jwt = require('jsonwebtoken')
const pick = require('lodash/fp/pick')

const secret = 'jwt-secret'
const mock = {
  user: 'vu',
  password: '123123'
}

module.exports = (req, res) => {
  /*
     Strategy:
     - Check if localStorage has a token
     - If not, show #LoginForm
     - if found, show #Continue button

     #LoginForm:
     - User submit with user/pwd
     - Provide a Token for user at his request
     - Upon success, display to #Continue button'

     #Continue:
     - Ask user to click on Continue/Proceed to go to Test home-screen
     - On click, validate again in case Browser has been closed and re-opened
     (this is where user can pick up the test where he left off)
     - Validate token, if valid, go to Home-screen
     - if not valid, go back to LoginForm, require Login again to get new Token
   */

  const payload = req.body
  const authUser = payload.user === mock.user && payload.password === mock.password
  let token = req.get('Access-Token')

  const newTokenMsg = 'You have received a temporary Token which expires in 60s.'
  const invalidTokenMsg = 'This Token is either invalid or already expired, please login to get a new one!'
  const validTokenMsg = 'Access granted'
  const invalidUserPwdMsg = 'Invalid Credentials'

  let json = {}
  let status = 200

  /*
    Authentication Piority:
    1 Username/Password
    2 Token
  */

  if (authUser) {
    token = jwt.sign({
      data: req.body,
      exp: Math.floor(Date.now() / 1000) + (60 * 30)
    }, secret)
    status = 201
    json = { error: false, message: newTokenMsg, response: { token, user: req.body.user } }
    return res.status(status).json(json)
  }

  if (token.length === 0) {
    status = 401
    json = { error: true, message: invalidUserPwdMsg, response: null }
    return res.status(status).json(json)
  }

  return jwt.verify(token, secret, (err, decoded) => res.status(err ? 401 : 202).json({
    error: !!err,
    message: err ? invalidTokenMsg : validTokenMsg,
    response: err ? null : pick(['exp', 'iat'], decoded)
  }))
}
