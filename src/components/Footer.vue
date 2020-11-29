<template>
    
    <v-card height="150">
        <v-footer
        absolute
        class="font-weight-medium pa-10"
        color="secondary"
        >
            <v-btn depressed class="black--text secondary">
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn depressed class="black--text secondary">
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn depressed class="black--text secondary">
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
            <v-btn depressed class="black--text secondary">
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-spacer/>
            <p>&copy; {{ new Date().getFullYear() }},  <strong>STREAM</strong>FLIX</p>
            </v-footer>
  </v-card>
</template>