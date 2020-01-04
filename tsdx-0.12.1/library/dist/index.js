
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./library.cjs.production.min.js')
} else {
  module.exports = require('./library.cjs.development.js')
}
