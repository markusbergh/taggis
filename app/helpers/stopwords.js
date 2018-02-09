// Some of the commonly used word in english that we could safely strip from source

// Maybe should be put in a (text) file generated somehow, for easier editing...
const words = [
  'about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can',
  'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had',
  'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into',
  'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must',
  'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over',
  'said', 'same', 'see', 'should', 'since', 'some', 'still', 'such', 'take', 'than',
  'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those',
  'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were',
  'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your', 'a', 'i',
]

// Characters that can safely removed
const markers = [
  '-', ',', '#', '@', '.',
]

// Commonly used twitter words that could be nice to remove for funnier result
const twitter = [
  'rt', 'retweet',
]

const removeStopwords = (source, useTwitterStopwords = false) => {
  return source.filter(value => {

    let stopwords = words.concat(markers)

    // Append commonly used twitter words
    if (useTwitterStopwords) {
      stopwords = stopwords.concat(twitter)
    }

    // Since tweets are are altered to lower case when fetched we wouldn't
    // really need to do it here again, but just to be sure we will keep it.
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

module.exports = {
  removeStopwords,
}
