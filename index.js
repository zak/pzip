var spawn = require('child_process').spawn

function pzip(filelist, zipfilename, password, opts) {
  if (opts === undefined) opts = {}

  if (!password) {
    throw new Error('password is required for pzip')
  } else if (typeof password !== 'string') {
    throw new TypeError('password must be a string')
  }

  var zip = spawn(__dirname + '/bin/zip', ['-P', password, zipfilename, filelist], opts)

  return zipfilename
}

module.exports = pzip
