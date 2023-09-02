import './assets/css/main.css';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import * as vuetify_components from 'vuetify/components';
import * as vuetify_directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as common_components from './components/common';

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
    components: {
        ...vuetify_components,
        ...common_components,
    },
    directives: {
        ...vuetify_directives,
    },
    icons: {
        aliases,
        sets: {
            mdi,
        },
    },
});

createApp(App).use(vuetify).use(router).mount('#app');
