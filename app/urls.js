module.exports = {
  base: 'https://api.twitter.com',
  request: '/oauth2/token',
  search: '/search/tweets.json?',
  callback: `http://localhost:3000/svtagcloud/callback`,
  verify: 'https://api.twitter.com/1.1/account/verify_credentials.json',
}
