const teams = require('../teams')
const models = require('../models')

const getAllTeams = async (request, response) => {
  try {
    const teams = await models.teams.findAll()

    return response.send(teams)
  } catch (error) {
    return response.status(500).send('Unable to retrieve team list')
  }
}

const getTeam = async (request, response) => {
  try {
    const { id } = request.params

    const team = await models.teams.findOne({ where: { id } }) ||
      await models.teams.findAll({ where: { conference: id } })

    return team ? response.send(team) : response.sendStatus(404) // if there's a team of that #, return that team, if not return error
  } catch (error) {
    return response.status(500).send('Unable to retrieve team, please try again')
  }
  /* const team = teams.find((team) => { return team.id === parseInt(request.params.id) })

  return response.send(team)*/
}

const getTeamByDiv = async (request, response) => {
  const { div } = request.params

  const team = await models.teams.findAll({ where: { division: div } })

  return response.send(team)
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
  addNewTeam,
  getTeamByDiv
}
