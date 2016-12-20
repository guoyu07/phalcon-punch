<template>
  <div id="trip">
    <!-- start main content -->
    <main class="pontos">
      <section class="row--full row card__slide--dark card__slide card">
        <section class="pontos__skipperHat grid">
          <section class="grid__col-sm-12 grid--justify-center grid__cell--padding-lg">
           <span class="icon__svgSkipperHat--3 icon__svgSkipperHat icon">
            </span>
          </section>
        </section>
        <section class="grid">
          <div class="leftBlock grid__col-sm-7">
                <span class="highlightScore">
                    {{ monthlySignedDocLeadsCount }}
                </span>
            <h3 class="pontos__scoreHeader titleFont">
              MONTHLY SIGNED DOCS
            </h3>
               <span class="highlightScore">
                   {{ monthlyLeadsCount }}
               </span>
            <p class="pontos__scoreHeader titleFont">
              MONTHLY LEADS
            </p>
            <ul class="dailyScore ">
              <li class="titleFont">
                <strong>DAILY SCORE</strong>
              </li>
              <li v-for="item in dailySignedLeadsByAdvisers">
                       <span >
                           <strong> {{ fullName(item) }} </strong>
                       </span>
                       <span class="titleFont">
                           {{ item.leads_count }}
                       </span>
              </li>
            </ul>
          </div>
          <div class="grid__col-sm-5 ">
            <ul class="baScore">
              <li >
                <p class=" titleFont ">
                  MONTHLY SCORE
                </p>
              </li>
              <li class="baScore__borderImage" v-if="winnerBA">
                <div class=" baScore__image image-cropper">
                  <img v-if="winnerBA" :src="winnerBA.image" alt="" />
                </div>
                <div class="baScore__score">
                  {{ winnerBA.leads_count }}
                </div>
              </li>
              <li v-for="(item, index) in monthlySignedLeadsByAdvisers" v-if="item">
                <div class="baScore__image image-cropper">
                  <img  class=" pontosImageCircle" :src="item.image" alt="Marcos">
                </div>
                <div class="baScore__score">
                  {{ item.leads_count }}
                </div>
              </li>
            </ul>
          </div>
        </section>

      </section>

    </main>
    <!-- end main content -->
  </div>
</template>

<script type="text/babel">
  import { mapState, mapMutations, mapGetters } from 'vuex'
  import Pusher from 'pusher-js'

  export default {
    name: 'trip',
    created () {
      this.getLeads()
      this.subscribeToChannel()
    },
    computed: {
      ...mapGetters({
        monthlyLeadsCount: 'monthlyLeadsCount',
        monthlySignedDocLeadsCount: 'monthlySignedDocLeadsCount',
        monthlySignedLeadsByAdvisers: 'monthlySignedLeadsByAdvisers',
        dailySignedLeadsByAdvisers: 'dailySignedLeadsByAdvisers'
      }),
      winnerBA () {
        if (typeof this.monthlySignedLeadsByAdvisers !== 'undefined') {
          return this.monthlySignedLeadsByAdvisers[0]
        }
      }
    },
    methods: {
      subscribeToChannel () {
        let pusher = new Pusher('6d23711ca49c35d5ce88')
        let channel = pusher.subscribe('phalcon')

        channel.bind('inquiry-created', () => {
          this.$store.dispatch('getMonthlyLeads')
        })
        channel.bind('inquiry-signed-doc', () => {
          this.getLeads()
        })
      },

      getLeads () {
        this.$store.dispatch('getDailySignedDocs')
        this.$store.dispatch('getMonthlyLeads')
        this.$store.dispatch('getMonthlySignedDocLeads')
      },

      fullName (item) {
        return item.first_name + ' ' + item.last_name
      }
    }
  }
</script>
