import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi'
    },

    theme: {
        themes: {
            light: {
                primary: '#e20813',
                secondary: '#f7f2ef',
                tertiary: '#000000',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
                
            },
        }, 
    },
});
