const express = require('express')
const teams = require('./teams')
const { getAllTeams, getTeam } = require('./controller/teams')

const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeam)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1342, () => {
  console.log('listening on port 1342...') // eslint-disable-line no-console
})
