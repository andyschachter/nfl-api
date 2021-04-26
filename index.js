const express = require('express')
const teams = require('./teams')

const app = express()

app.get('/teams', (request, response) => {
  return response.send(teams)
})

app.get('/teams/:id', (request, response) => {
  const team = teams.find((team) => { return team.id === parseInt(request.params.id) })

  return response.send(team)
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1342, () => {
  console.log('listening on port 1342...') // eslint-disable-line no-console
})
