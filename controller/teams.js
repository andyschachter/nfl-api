const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeam = (request, response) => {
  const team = teams.find((team) => { return team.id === parseInt(request.params.id) })

  return response.send(team)
}

const addNewTeam = (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400)
      .send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = {
  getAllTeams,
  getTeam,
  addNewTeam
}
