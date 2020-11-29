<template>
  <div>
      <h2>Now Playing</h2>

      <v-row>
          <v-col v-for="movie in movies" v-bind:key="movie.id">
                  <VerticalCard v-bind:movie="movie"/>
          </v-col>
      </v-row>
      
  </div>
</template>

<script>
//import axios from 'axios'
import VerticalCard from '@/components/VerticalCard.vue'

export default {
    name: "MovieList",
    components: {
        VerticalCard
    },
    props: ["movies"],
    // data: function() {
    //     return {
    //         movie : null
    //     }
    // },
    // methods: {
    //     getData() {
    //         var that = this
    //         axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7bb075c43180bc41bffe6004eb81113&language=en-US&page=1')
    //              .then(function(response) {
    //                 that.movie = response.data
    //             })
    //     }
    // },
    // mounted: function () {
    //     this.getData()
    // }
}
</script>