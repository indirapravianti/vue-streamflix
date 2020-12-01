<template>
  <div class="home">
    <MovieList v-bind:movies="movies"/>
    <div class="my-4"> <!-- Pagination -->
      <ul class="pagination pagination-md justify-content-center text-center">
            <li :class="page === 1 ? 'disabled' : ''">
              <a class="page-link" @click="prevPage">Previous</a>
            </li>
            <li style="background-color: inherit">
                {{page}}
            </li>
            <li :class="page === lastPage ? 'disabled' : ''">
              <a class="page-link" @click="nextPage">Next</a>
            </li>
          </ul>
    </div>
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
            movies : null,
            page: 1,
            perPage: 20
        }
    },
    methods: {
        getData() {
            var that = this
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e7bb075c43180bc41bffe6004eb81113&language=en-US&page=' + this.page)
                 .then(function(response) {
                    that.movies = response.data.results
                })
        },
        prevPage () {
          this.page--;
          this.getData();
        },
        nextPage () {
          this.page++;
          this.getData();
        },
        lastPage () {
            let length = this.movies.length 
            return length / this.perPage
        }
    },
    mounted: function () {
        this.getData()
    }
}
</script>
