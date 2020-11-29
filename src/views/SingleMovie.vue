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
                    <p class="font-weight-medium">Price:</p>
                    <v-btn depressed color="primary" class="pa-5 rounded-tl-xl rounded-br-xl">
                        BUY NOW
                    </v-btn>
                </v-col>
            </v-row>

            <h2>Similar Movies</h2>
            <v-row>
                <v-col
                    v-for="n in 5"
                    :key="n"
                >
                    <VerticalCard v-bind:movie="movie"/>
                </v-col>
            </v-row>


            <h2 class="mt-10">Movies you might like</h2>
            <v-row>
                <v-col
                    v-for="n in 5"
                    :key="n"
                >
                    <VerticalCard v-bind:movie="movie"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
import axios from 'axios'
import VerticalCard from '@/components/VerticalCard.vue'

export default {
    props: ['id'],
    components: {
        VerticalCard
    },
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
            axios.get('https://api.themoviedb.org/3/movie/'+this.id+'/similar?api_key=e7bb075c43180bc41bffe6004eb81113')
                 .then(function(response) {
                    that.similarMovies = response.data.results
                })
        },
        nestedDataToString(data) {
            let nestedArray = [], resultString;
            data.forEach((item) => nestedArray.push(item.name));
            resultString = nestedArray.join(', ');
            return resultString;
        }
        // price() {
        //     if (movie.vote_average >= 1 && movie.vote_average <= 3){
        //         return 'Rp 3.500'
        //     }
        //     else if ( movie.vote_average >= 3 && movie.vote_average <= 6){
        //         return 'Rp 8.250'
        //     }
        //     else if ( movie.vote_average >= 6 && movie.vote_average <= 8){
        //         return 'Rp 16.350'
        //     }
        //     else if ( movie.vote_average >= 8 && movie.vote_average == 10){
        //         return 'Rp 21.250'
        //     }
        // },
    },
    mounted: function () {
        this.getData(),
        this.getCast(),
        this.getSimilar()
    }
}
</script>