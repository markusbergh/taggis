const urls = require('./../urls')

const endpoint = (req, res) => {
  // No token available in session
  if (!req.session.oauthAccessToken) {
    // Try to connect
    res.redirect('/svtagcloud/connect')
  } else {
    // Render empty state
    return res.status(200).render('index')
  }
}

module.exports = {
  endpoint,
}
