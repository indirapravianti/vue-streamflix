<template>
  <div class="home">
    <MovieList v-bind:movies="movies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '../components/MovieList'
import axios from 'axios'

export default {
  components: {
    MovieList
  },
  data: function() {
        return {
            movies : null
        }
    },
    methods: {
        getData() {
            var that = this
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7bb075c43180bc41bffe6004eb81113&language=en-US&page=1')
                 .then(function(response) {
                    that.movies = response.data.results
                })
        }
    },
    mounted: function () {
        this.getData()
    }


}
</script>
