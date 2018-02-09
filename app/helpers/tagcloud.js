const stopwords = require('./stopwords')
const logger = require('../utils/logger')

const generate = (data) => {
  // Get a list of tweets and return the string as lowercased for better counting
  let tweets = data.map(item => item.text.toLowerCase())
  
  // Have each word in an array for all tweets
  const words = tweets.join(' ').split(/\s+/)

  // Remove any stopwords for the English language
  const filteredWords = stopwords.removeStopwords(words, true)

  // Map structure
  // {
  //   word: 'foo',
  //   count: 3
  // }

  let countMap = {}

  // Count each occurrance of word
  filteredWords.forEach(word => {
    if (countMap.hasOwnProperty(word)) {
      countMap[word]++
    } else {
      // None was found, so set initial value to one
      countMap[word] = 1
    }
  })


  let sortedWords = []

  sortedWords = Object.keys(
    countMap,
  ).map(key => {
    return {
      word: key,
      total: countMap[key],
    }
  })

  // Sort by descending order
  sortedWords.sort((a, b) => {
    return b.total - a.total
  })

  // Return the counted and sorted list of words
  return sortedWords.slice(0, 99)
}

const calculateSizes = (words) => {
  const maxSize = 50
  const minSize = 12

  // Since we have a sorted list, last item would have smallest count
  const minCount = words[words.length - 1].total
  const maxCount = words[0].total

  words.forEach(word => {
    const currentCount = word.total

    // Calculate size
    const size = (
      ((currentCount - minCount) * (maxSize - minSize)) /
      (maxCount - minCount)
    )

    // Set size on data model
    word.fontSize = size
  })

  // All is done, return the updated model
  return words
}

module.exports = {
  generate,
  calculateSizes,
}
