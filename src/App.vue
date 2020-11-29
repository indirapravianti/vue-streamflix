<template>
    <v-app>
      <v-main class="grey lighten-4">
        <Navbar/>
          <router-view class="mx-16">
          
          </router-view>
        <Footer/>
      </v-main>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
