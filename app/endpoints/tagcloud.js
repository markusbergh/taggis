const endpoint = (req, res) => {
  const data = req.session.data

  /**
   * Old implementation set a random percentage for absolute position
   */

  /*
  data.map(item => {
    // We should check if value is already taken somehow...
    const topRandom = Math.floor(Math.random() * 99) + 1
    const bottomRandom = Math.floor(Math.random() * 99) + 1

    item.position = {
      top: `${topRandom}%`,
      left: `${bottomRandom}%`
    }
  })
  */

  // No data in session, go to index
  if (!data) {
    res.redirect('/')
  } else {
    res.status(200).render(
      'index', {
        'data': JSON.stringify(data),
        query: req.query.hashtag
      }
    )
  }
}

module.exports = {
  endpoint,
}
