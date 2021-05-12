const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { teamsList, singleTeam } = require('../mocks/teams')
const { before, afterEach, describe, it } = require('mocha')
const { getAllTeams, getTeam, addNewTeam, getTeamByDiv } = require('../../controller/teams')

chai.use(sinonChai)
const { expect } = chai

describe('Teams Controller', () => {
  let stubbedFindOne
  let stubbedFindAll
  let stubbedCreate

  before(() => {
    stubbedFindOne = sinon.stub(models.teams, 'findOne')
    stubbedFindAll = sinon.stub(models.teams, 'findAll')
    stubbedCreate = sinon.stub(models.teams, 'create')
  })

  afterEach(() => {
    stubbedFindOne.resetBehavior()
    stubbedFindAll.resetBehavior()
    stubbedCreate.resetBehavior()
  })

  describe('Get All Teams', () => {
    it('returns list of all teams in database calling response.send() for the specified list', async () => {
      stubbedFindAll.returns(teamsList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllTeams({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(teamsList)
    })
  })

  describe('Get One Team', () => {
    it('returns one team with a particular id calling response.send() for that provided id', async () => {
      const request = { params: { id: 3 } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      stubbedFindOne.returns(singleTeam)

      await getTeam(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 3 } })
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })

    it('Returns a 404 error when no team is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'not-found' } }
      const stubbedSendStatus = sinon.stub()
      const response = { sendStatus: stubbedSendStatus }

      await getTeam(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'not-found' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
  })

  describe('Add New Team', () => {
    it('accepts new team details and saves them as a team in database, returns that new team', async () => {
      stubbedCreate.returns(singleTeam)
      const request = { body: singleTeam }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const response = { status: stubbedStatus }

      await addNewTeam(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleTeam)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })
  })
})
