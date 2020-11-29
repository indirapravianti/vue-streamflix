<template>
<div>
  <v-card
    max-height="500"
    max-width="200"
    align="center"
    pa-2
  >
    <v-img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path"></v-img>

    <v-card-title class="subtitle-2 font-weight-bold" align="left">
      {{ movie.original_title }}
    </v-card-title>

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
    props:["movie"]
}
</script>