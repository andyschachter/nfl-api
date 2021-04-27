const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeam = (request, response) => {
  const team = teams.find((team) => { return team.id === parseInt(request.params.id) })

  return response.send(team)
}

module.exports = {
  getAllTeams,
  getTeam
}
