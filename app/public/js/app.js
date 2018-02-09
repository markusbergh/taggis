(global => {

  const tagcloud = (() => {
    // Logic for a tag cloud generation.
    // source: http://static.mrfeinberg.com/bv_ch03.pdf
    //
    // 1. Attempt to place word at a starting point
    // 2. If word intersects with previously placed word, move it along an increasing spiral
    //

    // Using 3rd-party library for now...
    const initialize = () => {

      // The actual container for tagcloud
      const container = document.querySelector('.tagcloud')

      // Get data generated from server
      const data = global.__DATA__

      if (data) {
        // Populate model
        const list = data.map(item => {
          return [item.word, item.total]
        })

        // Generate tagcloud using library
        WordCloud(container, {
          gridSize: 10,
          list: list,
          minSize: 0,
          color: '#111',
          weightFactor: 8,
          rotateRatio: 0,
        })
      }
    }

    return {
      initialize: initialize,
    }
  })()

  // When DOM is parsed and ready
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize tagcloud
    tagcloud.initialize()
  })
})(window)
