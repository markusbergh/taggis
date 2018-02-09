const oauth = require('oauth')

const urls = require('./../urls')
const logger = require('./../utils/logger')

const { consumer } = require('./../helpers/consumer')

const endpoint = (req, res) => {
  logger.log('Fetching access token (/svtagcloud/connect)')

  consumer.getOAuthAccessToken('', {
    'grant_type': 'client_credentials',
  }, (err, accessToken, refreshToken, results) => {
    if (err) {
      logger.log(`Error while fetching access token: ${err.data}`)

      return res.status(401).send(
        'There was an error while authorizing application',
      )
    }

    logger.log('Received access token (/svtagcloud/connect)')

    // Save token in session
    req.session.oauthAccessToken = accessToken

    // Go back to index
    res.redirect('/')
  })
}

module.exports = {
  endpoint,
}
