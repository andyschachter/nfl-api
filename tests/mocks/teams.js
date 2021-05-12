const teamsList = [{
  id: 2,
  location: 'Miami',
  mascot: 'Dolphins',
  abbreviation: 'MIA',
  conference: 'AFC',
  division: 'East'
}, {
  id: 3,
  location: 'New England',
  mascot: 'Patriots',
  abbreviation: 'NE',
  conference: 'AFC',
  division: 'East'
}]

const singleTeam = {
  location: 'New England',
  mascot: 'Patriots',
  abbreviation: 'NE',
  conference: 'AFC',
  division: 'East'
}

const singleNotTeam = {
  mascot: 'Patriots',
  abbreviation: 'NE',
  conference: 'AFC',
  division: 'East'
}

const singleBadTeam = {
  location: 'New England',
  mascot: 'Patriots',
  abbreviation: 'NE',
  conference: 'XFL',
  division: 'East'
}

module.exports = { teamsList, singleTeam, singleNotTeam, singleBadTeam }
