<template>
  <div>
    <v-card
      max-height="600"
      max-width="200"
      align="center"
      pa-2
    >
      <v-img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path"></v-img>

      <v-card-title class="subtitle-2 font-weight-bold" align="left">
        {{ movie.original_title }}
      </v-card-title>

      <v-card-subtitle>
        <p class="subtitle-2 font-weight-bold" align="left">Price:{{price(movie.vote_average)}}
        </p>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn class="pa-5 primary white--text" text>
            VIEW
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    name: "VerticalCard",
    props:["movie"],
    methods: {
      price(vote){
            var moviePrice;
            if (vote >= 1 && vote <= 3) {
                moviePrice =  "Rp 3.500"
            } else if (vote >= 3 && vote <= 6) {
                moviePrice = "Rp 8.250"
            } else if (vote >= 6 && vote <= 8) {
                moviePrice = "Rp 16.350"
            } else if (vote >= 8 && vote <= 10) {
                moviePrice = "Rp 21.250"
            } 
            return moviePrice;
        }
    },
    mounted: function() {
      this.price()
    }
}
</script>