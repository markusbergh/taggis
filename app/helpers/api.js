const urls = require('./../urls')
const logger = require('./../utils/logger')

// Use Fetch API instead of using http/https from Node.js API
if (global.fetch === undefined) {
  global.fetch = require('node-fetch')
}

const getHashtag = async (hashtag, req) => {
  try {
    logger.log(`Trying hashtag search for: ${hashtag}`)

    const encodedString = encodeURIComponent(`#${hashtag}`)
    const apiUrl = urls.base
    const requestUrl = `${apiUrl}/1.1${urls.search}&q=${encodedString}&include_entities=true&result_type=mixed`

    const init = {
      'headers': {
        'Authorization': `Bearer ${req.session.oauthAccessToken}`,
      },
    }

    const response = await fetch(requestUrl, init)
    const responseJson = await response.json()

    if (responseJson.errors) {
      // Hardcode first error for now
      throw (responseJson.errors[0])
    }

    // Return parsed response data
    return responseJson
  } catch (err) {
    logger.log(`Error while fetching: ${err.message}`)
  }
}

module.exports = {
  getHashtag,
}
