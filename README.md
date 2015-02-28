# pzip [![Build Status](https://travis-ci.org/benjaminparnell/pzip.svg)](https://travis-ci.org/benjaminparnell/pzip)

`pzip` uses the `zip` binary to create encrypted zip files that can be unlocked
with a specified password.

## Installation

`npm install pzip`

## Usage

```js
var pzip = require('pzip')
  , fs = require('fs')
  , zip = pzip('private.csv', '123')

zip.stdout.pipe(fs.createWriteStream('encrypted.zip'))
```

### pzip(filePath, password, [options])
Creates an instance of the `zip` binary that will produce a passworded archive.

`options` are passed directly to `child_process.spawn`

## TODO

* Handle directories
* Handle globs

## Credits

[Ben Parnell](http://github.com/benjaminparnell)
