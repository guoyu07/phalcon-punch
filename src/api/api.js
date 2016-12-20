import Axios from 'axios'

export default {
  getDailyLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=daily"
    return this.getDataFromApi(url)
  },
  
  getDailySignedDocs() {
    let url = "http://jetaport.dharma/inquiriesCount?count=daily&type=signedDoc"
    return this.getDataFromApi(url)
  },

  getMonthlyLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=monthly"
    return this.getDataFromApi(url)
  },

  getMonthlySignedDocLeads () {
    let url = "http://jetaport.dharma/inquiriesCount?count=monthly&type=signedDoc"
    return this.getDataFromApi(url)
  },

  getDataFromApi (url) {
    return Axios.get(url, {headers: this.getHeader()}).then(response => {
      return response.data.data
    }).catch(error => {
      throw new Error('problem fetching data from api')
    })
  },

  getHeader () {
    return {
      'Authorization' : 'Bearer BJKTXiCB8kWbuAWUmBmOKDBU7tWvyBQaV4NPS40e'
    }
  }
}
