const api = require('./../helpers/api')
const tagcloud = require('./../helpers/tagcloud')
const logger = require('./../utils/logger')

const endpoint = async (req, res) => {
  logger.log(`Retrieving tweets for hashtag: ${req.body.hashtag}`)

  const hashtag = req.body.hashtag
  const searchResult = await api.getHashtag(hashtag, req)

  if (!searchResult) {
    return res.status(401).send(
      'There was an error while retriving tweets.',
    )
  }

  // Generate data for rendering
  const data = tagcloud.generate(searchResult.statuses)

  // Set session data
  req.session.data = data

  // Set query for hashtag
  res.redirect(`/svtagcloud/show?hashtag=${encodeURIComponent(hashtag)}`)
}

module.exports = {
  endpoint,
}
