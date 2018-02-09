const oauth = require('oauth')

const urls = require('./../urls')

// Credentials
const key = process.env.TWITTER_KEY
const secret = process.env.TWITTER_SECRET

// Consumer for OAuth
const consumer = new oauth.OAuth2(
  key,
  secret,
  urls.base,
  null,
  urls.request,
  null,
)

module.exports = {
  consumer,
}
