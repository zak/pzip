var test = require('tape')
  , Stream = require('stream')
  , pzip = require('..')

test('should return an instance of child_process.spawn', function (t) {
  t.plan(2)
  var zip = pzip('t.txt', '123')
  t.assert(zip.stdout instanceof Stream.Readable, true)
  t.assert(zip.stderr instanceof Stream.Readable, true)
  zip.kill()
})

test('throw an error if password is not a string', function (t) {
  t.plan(1)
  t.throws(pzip.bind(null, 't.txt', 123), 'password must be a string')
})

test('throw an error if password is not present', function (t) {
  t.plan(1)
  t.throws(pzip.bind(null, 't.txt'), 'password is required for pzip')
})
