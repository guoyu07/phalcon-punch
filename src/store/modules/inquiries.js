import * as types from './mutation-types'
import api from '../../api/api'

// initial state
const state = {
  dailyLeads: [],
  dailySignedDocs: [],
  monthlyLeads: [],
  monthlySignedDocLeads: []
}

// getters
const getters = {
  monthlyLeadsCount: state => {
    return state.monthlyLeads.total_leads
  },
  monthlySignedDocLeadsCount: state => {
    return state.monthlySignedDocLeads.total_leads
  },
  dailySignedLeadsByAdvisers: state => state.dailySignedDocs.booking_adviser,
  monthlySignedLeadsByAdvisers: state => state.monthlySignedDocLeads.booking_adviser
}

// actions
const actions = {
  getDailyLeads ({ commit }) {
    api.getDailyLeads().then(response => {
      commit(types.DAILY_LEADS, response)
    }).catch(error => {
      console.log(error)
    })
  },

  getDailySignedDocs ({ commit }) {
    api.getDailySignedDocs().then(response => {
      commit(types.DAILY_SIGNED_DOCS, response)
    }).catch(error => {
      console.error(error)
    })
  },

  getMonthlyLeads ({ commit }) {
    api.getMonthlyLeads().then(response => {
      commit(types.MONTHLY_LEADS, response)
    }).catch(error => {
      console.log(error)
    })
  },

  getMonthlySignedDocLeads ({ commit }) {
    api.getMonthlySignedDocLeads().then(response => {
      commit(types.MONTHLY_SIGNED_DOC_LEADS, response)
    }).catch(error => {
      console.log(error)
    })
  }
}

// mutations
const mutations = {
  [types.MONTHLY_LEADS] (state, inquiries) {
    // assign the inquiries to state.monthlyLeads
    state.monthlyLeads = inquiries
  },

  [types.MONTHLY_SIGNED_DOC_LEADS] (state, payload) {
    state.monthlySignedDocLeads = payload
  },

  [types.DAILY_LEADS] (state, inquiries) {
    // assign the inquiries to state.dailyLeads
    state.dailyLeads = inquiries
  },

  [types.DAILY_SIGNED_DOCS] (state, inquiries) {
    // assign the inquiries to state.dailyLeads
    state.dailySignedDocs = inquiries
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}


