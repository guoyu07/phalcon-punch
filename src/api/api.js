import Axios from 'axios'

export default {
  getDailyLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=daily"

    return Axios.get(url, {headers: this.getHeader()}).then(response => {
      return response.data.data
    }).catch(error => {
      throw new Error('problem fetching daily leads')
    })
  },

  getMonthlyLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=monthly"
    return Axios.get(url, {headers: this.getHeader()}).then(response => {
      return response.data.data
      }).catch(error => {
        throw new Error('problem fetching monthly leads')
      })
  },

  getMonthlySignedDocLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=monthly&type=signedDoc"
    return Axios.get(url, {headers: this.getHeader()}).then(response => {
      return response.data.data
    }).catch(error => {
      throw new Error('problem fetching monthly leads')
    })
  },

  getHeader () {
    return {
      'Authorization' : 'Bearer BJKTXiCB8kWbuAWUmBmOKDBU7tWvyBQaV4NPS40e'
    }
  }
}
