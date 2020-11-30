<template>
    <div id="single-movie">
        <v-container class="mt-10">
            <v-row>
                <v-col md="4" offset-lg="0">
                     <v-img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path"></v-img>
                </v-col>
                <v-col md="9" lg="7">
                    <!-- title, rating, runtime, release_date, genres -->
                    <h1>{{movie.original_title}}</h1>
                    <p class="button"><v-icon color="amber darken-1" size="30">mdi-star</v-icon>{{movie.vote_average}} ({{movie.vote_count}} votes)</p>
                    <p class="caption">Genres: {{ nestedDataToString(movie.genres) }}</p>
                    <p class="caption">Runtime: {{movie.runtime}}m | Release date: {{movie.release_date}}</p>
                    
                    <v-divider></v-divider>

                    <!-- movie description -->
                    <p class="font-weight-medium mt-10">Description</p>
                    <p>{{movie.overview}}</p>
                    <!-- movie cast -->
                    <p class="font-weight-medium">Casts: </p>
                    <p>{{ nestedDataToString(movieCasts.cast) }}</p>
                    <!-- production companies -->
                    <p class="font-weight-medium">Production companies: </p>
                    <p>{{ nestedDataToString(movie.production_companies) }}</p>
                    <!-- production countries -->
                    <p class="font-weight-medium">Production countries: </p>
                    <p>{{ nestedDataToString(movie.production_countries) }}</p>
                    <!-- movie price and buy button -->
                    <p class="font-weight-medium">Price: {{price(movie.vote_average)}}</p>
                    <v-btn depressed color="primary" class="pa-5 rounded-tl-xl rounded-br-xl">
                        BUY NOW
                    </v-btn>
                </v-col>
            </v-row>

            <h2>Similar Movies</h2>
                    <v-row>
                <v-col
                    v-for="index in 5"
                    :key="index"
                >
                <router-link v-bind:to="'/movie/' + similarMovies[index].id" class="text-decoration-none">
                     <v-card
                        max-height="600"
                        max-width="200"
                        align="center"
                        pa-2
                    >
                        <v-img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + similarMovies[index].poster_path"></v-img>

                        <v-card-title class="subtitle-2 font-weight-bold" align="left">
                        {{ similarMovies[index].original_title }}
                        </v-card-title>

                        <v-card-actions>
                        <v-btn class="pa-5 primary white--text" text>
                            VIEW
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </router-link>    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    props: ['id'],
    data: function() {
        return {
            movie : null,
            movieCasts: null,
            similarMovies: null
        }
    },
    methods: {
        getData() {
            var that = this
            axios.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=e7bb075c43180bc41bffe6004eb81113')
                 .then(function(response) {
                    that.movie = response.data
                })
        },
        getCast() {
            var that = this
            axios.get('https://api.themoviedb.org/3/movie/'+this.id+'/credits?api_key=e7bb075c43180bc41bffe6004eb81113')
                 .then(function(response) {
                    that.movieCasts = response.data
                })
        },
        getSimilar() {
            var that = this
            axios.get('https://api.themoviedb.org/3/movie/'+this.id+'/similar?api_key=e7bb075c43180bc41bffe6004eb81113&page=1')
                 .then(function(response) {
                    that.similarMovies = response.data.results
                })
        },
        nestedDataToString(data) {
            let nestedArray = [], resultString;
            data.forEach((item) => nestedArray.push(item.name));
            resultString = nestedArray.join(', ');
            return resultString;
        },
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
    mounted: function () {
        this.getData(),
        this.getCast(),
        this.getSimilar()
    }
}
</script>