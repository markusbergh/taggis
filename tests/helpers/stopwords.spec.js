const chai = require('chai')
const expect = require('chai').expect

const stopwords = require('../../app/helpers/stopwords')

describe('stopwords', () => {
  it('should remove stopwords from a string if there are matches', (done) => {

    const initialArray = 'this is a really funny case task from you people at gärdet'.split(' ')
    const filteredArray = stopwords.removeStopwords(initialArray)

    const expectedArray = ['really', 'funny', 'case', 'task', 'people', 'gärdet']

    expect(filteredArray).to.be.an('array')
                         .to.deep.equal(expectedArray)

    done()
  })

  it('should, if set, remove common words used in tweets', (done) => {

    const initialArray = 'RT i wonder what you people will think of this please retweet me'.split(' ')
    const filteredArray = stopwords.removeStopwords(initialArray, true)

    const expectedArray = ['wonder', 'people', 'will', 'think', 'please']

    expect(filteredArray).to.be.an('array')
                         .to.deep.equal(expectedArray)

    done()
  })
})
