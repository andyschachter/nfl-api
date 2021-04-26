const express = require('express')
const teams = require('./teams')

const app = express()

app.listen(1342, () => {
  console.log('listening on port 1342...') // eslint-disable-line no-console
})
