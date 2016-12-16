import * as types from './mutation-types'
import api from '../../api/api'

// initial state
const state = {
  dailyLeads: [],
  monthlyLeads: []
}

// getters
const getters = {
  monthlyLeadsCount: state => {
    return state.monthlyLeads.total_leads
  },
  dailyLeadsCount: state => {
    return state.dailyLeads.total_leads
  },
  dailyLeadsByAdvisers: state => state.dailyLeads.booking_adviser,
  monthlyLeadsByAdvisers: state => state.monthlyLeads.booking_adviser
}

// actions
const actions = {
  getDailyLeads ({ commit }) {
    api.getMonthlyLeads().then(response => {
      commit(types.MONTHLY_LEADS, response)
    }).catch(error => {
      console.log(error)
    })
  },

  getMonthlyLeads ({commit}) {
    api.getDailyLeads().then(response => {
      commit(types.DAILY_LEADS, response)
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

  [types.DAILY_LEADS] (state, inquiries) {
    state.dailyLeads = inquiries
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


