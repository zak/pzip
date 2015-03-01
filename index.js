var spawn = require('child_process').spawn

function pzip(path, password, opts) {
  if (opts === undefined) opts = {}

  if (!password) {
    throw new Error('password is required for pzip')
  } else if (typeof password !== 'string') {
    throw new TypeError('password must be a string')
  }

  var zip = spawn('zip', [ '-j', '-P', password, '-', path ], opts)

  return zip
}

module.exports = pzip
