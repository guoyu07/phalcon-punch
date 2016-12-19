<template>
  <div id="trip">
    <h1>MONTHLY SIGNED DOCS: {{ monthlySignedDocLeadsCount }}</h1>
     <h1>MONTHLY LEADS: {{ monthlyLeadsCount }}</h1>

    <h2>Monthly Score</h2>
    <ul>
      <li v-for="adviser in monthlyLeadsByAdvisers">
        <h3>{{ adviser.first_name }} : {{ adviser.leads_count}} </h3>
      </li>
    </ul>

    <h2>Daily Score</h2>
    <ul>
      <li v-for="adviser in dailyLeadsByAdvisers">
        <h3>{{ adviser.first_name }} : {{ adviser.leads_count}} </h3>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import { mapState, mapMutations, mapGetters } from 'vuex'
  import Pusher from 'pusher-js'

  export default {
    name: 'trip',
    created () {
      this.getLeadsCount()
      this.subscribeToChannel()
    },
    computed: {
      ...mapGetters({
        monthlyLeadsCount: 'monthlyLeadsCount',
        dailyLeadsCount: 'dailyLeadsCount',
        monthlySignedDocLeadsCount: 'monthlySignedDocLeadsCount',
        dailyLeadsByAdvisers: 'dailyLeadsByAdvisers',
        monthlyLeadsByAdvisers: 'monthlyLeadsByAdvisers'
      })
    },
    methods: {
      subscribeToChannel () {
        let pusher = new Pusher('6d23711ca49c35d5ce88')
        let channel = pusher.subscribe('phalcon')

        channel.bind('inquiry-created', () => {
          this.getLeadsCount()
        })
        channel.bind('inquiry-signed-doc', () => {
          this.getSignedDocsCount()
        })
      },
      getLeadsCount () {
        this.$store.dispatch('getDailyLeads')
        this.$store.dispatch('getMonthlyLeads')
        this.$store.dispatch('getMonthlySignedDocLeads')
      },
      getSignedDocsCount () {
        this.$store.dispatch('getMonthlySignedDocLeads')
      }
    }
  }
</script>

<style>
</style>
