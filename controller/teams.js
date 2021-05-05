const teams = require('../teams')
const models = require('../models')

const getAllTeams = async (request, response) => {
  const teams = await models.teams.findAll()

  return response.send(teams)
}

const getTeam = async (request, response) => {
  const { id } = request.params

  const team = await models.teams.findOne({ where: { id } })

  return response.send(team)

  /* const team = teams.find((team) => { return team.id === parseInt(request.params.id) })

  return response.send(team)*/
}

const addNewTeam = async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    return response.status(400)
      .send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = {
    location, mascot, abbreviation, conference, division
  }

  const team = await models.teams.create(newTeam)

  // teams.push(newTeam)

  return response.status(201).send(team)
}

module.exports = {
  getAllTeams,
  getTeam,
  addNewTeam
}
