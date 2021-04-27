const express = require('express')
const bodyParser = require('body-parser')
const teams = require('./teams')
const { getAllTeams, getTeam, addNewTeam } = require('./controller/teams')

const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeam)

app.use(bodyParser.json())

app.post('/teams', addNewTeam)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1342, () => {
  console.log('listening on port 1342...') // eslint-disable-line no-console
})
