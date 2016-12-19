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
                    1,598
                </span>
            <h3 class="pontos__scoreHeader titleFont">
              MONTHLY SIGNED DOCS
            </h3>
               <span class="highlightScore">
                   3,498
               </span>
            <p class="pontos__scoreHeader titleFont">
              MONTHLY LEADS
            </p>
            <ul class="dailyScore ">
              <li class="titleFont">
                DAILY SCORE
              </li>
              <li>
                       <span>
                           Alina Admon
                       </span>
                       <span class="titleFont ">
                           7
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
              <li class="baScore__borderImage">
                <div class=" baScore__image image-cropper">
                  <img src="http://skipper.jetaport.com//images/about/team_photos/Tex.jpg" alt="" />
                </div>
                <div class="baScore__score">
                  250
                </div>
              </li>
              <li>
                <div class="baScore__image image-cropper">
                  <img class=" pontosImageCircle" src="http://skipper.jetaport.com//images/about/team_photos/Tex.jpg" alt="Marcos">
                </div>
                <div class="baScore__score">
                  250
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
