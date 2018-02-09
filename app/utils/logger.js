// This is really not necessary, but it is nice to be using a colored output
// so that when checking logs in e.g. QA, it would be easy to spot out errors
// in red, or warnings in cyan/yellow.
//
// This is just an example that is not fully implemented. :-)

// Some colors for output
const FgRed = '\x1b[31m'
const FgGreen = '\x1b[32m'
const FgYellow = '\x1b[33m'
const FgCyan = '\x1b[36m'
const FgWhite = '\x1b[37m'
const FgBlack = '\x1b[30m'

// For resetting color in console
const FgNoColor = '\x1b[0m'

// Set date format (e.g. 2018-01-01 00:00:00 GMT+1)
const dateFormat = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short',
}

const log = (output) => {
  console.log(
    `${FgYellow}[${new Date().toLocaleDateString('sv-SE', dateFormat)}]${FgNoColor}`,
    `${output}${FgNoColor}`,
  )
}

module.exports = {
  log,
}
