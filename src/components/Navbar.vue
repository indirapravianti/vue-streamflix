<template>
    <nav>
        <v-toolbar flat app class="secondary px-16">
            <v-btn depressed small color="secondary" class="primary--text hidden-sm-and-up" @click="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title>
                <v-btn to="/" text class="text-uppercase primary--text text-xl-h6">
                    <span class="font-weight-bold">STREAM</span>
                    <span>FLIX</span>
                </v-btn>
                
            </v-toolbar-title>

            <v-toolbar-items class="hidden-xs-only ml-10">
                <v-btn text class="tertiary--text ">
                    Movies
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn text class="tertiary--text">
                    TV Shows
                </v-btn>
            </v-toolbar-items>

            <v-spacer />

            <v-toolbar-items class="hidden-xs-only">
                <v-btn depressed color="secondary" class="tertiary--text">
                    <Voucher class="hidden-xs-only"/>
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn depressed color="secondary" class="tertiary--text">
                    <v-icon>
                        mdi-bell
                    </v-icon>
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn to="/login" text class="tertiary--text">
                    Login
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn text class="tertiary--text">
                    Sign up
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>

                <v-navigation-drawer v-model="drawer" temporary app class="primary">
                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-action>
                                <v-icon class="white--text">{{ link.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
    </nav>
</template>

<script>
import Voucher from '@/components/Voucher'
export default {
    components: {Voucher},
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-home', text: 'Home', route: '/' },
                { icon: 'mdi-movie', text: 'Movies', route: '/' },
                { icon: 'mdi-television', text: 'TV Shows', route: '/' },
                { icon: 'mdi-login', text: 'Login', route: '/login' },
            ]
        }
    }
}
</script>