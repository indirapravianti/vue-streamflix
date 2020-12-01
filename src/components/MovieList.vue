<template>
  <div>
      <h2>Now Playing</h2>
      <v-row>
          <v-col v-for="movie in movies" v-bind:key="movie.id">
                  <router-link v-bind:to="'movie/' + movie.id" class="text-decoration-none">
                    <VerticalCard v-bind:movie="movie"/>
                  </router-link>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import VerticalCard from '@/components/VerticalCard.vue'

export default {
    name: "MovieList",
    components: {
        VerticalCard
    },
    props: {
      movies: Array
    }
}
</script>