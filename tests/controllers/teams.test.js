const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { getAllTeams, getTeam, addNewTeam, getTeamByDiv } = require('../controller/teams')

chai.use(sinonChai)
const { expect } = chai

describe('Teams Controller', () => {
  describe('Get All Teams', () => {
    it('returns list of all teams in database calling response.send() for the specified list', async () =>{
      const stubbedFindAll = sinon.stub(models.teams, 'findAll').returns(teamsList)
    })

  })

  describe('Get One Team', () => {
    
  })

  describe('Add New Team', () => {
    
  })
})