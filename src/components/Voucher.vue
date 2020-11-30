<template>
    <v-dialog max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn depressed class="primary" v-on="on" dark>Free voucher</v-btn>
    </template>
    <v-card class="px-8 py-8">
      <v-card-title>
        <h1 class="primary--text">JOIN STREAMFLIX</h1>
        <h3 class="font-weight-medium mt-5">Get free voucher worth Rp 100.000! <br> 
        Only new members are eligible for this offer.<br> Sign up now.</h3>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>