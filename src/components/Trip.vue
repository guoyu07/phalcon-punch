<template>
  <div id="trip">
    <h1>MONTHLY SIGNED DOCS: {{ dailyLeadsCount }}</h1>
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

  export default {
    name: 'trip',
    created () {
      this.$store.dispatch('getDailyLeads')
      this.$store.dispatch('getMonthlyLeads')
    },
    computed: {
      ...mapGetters({
        monthlyLeadsCount: 'monthlyLeadsCount',
        dailyLeadsCount: 'dailyLeadsCount',
        dailyLeadsByAdvisers: 'dailyLeadsByAdvisers',
        monthlyLeadsByAdvisers: 'monthlyLeadsByAdvisers'
      })
    }
  }
</script>

<style>
</style>
