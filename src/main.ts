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
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs';
import Particles from 'vue3-particles';

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

if (window) {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
}

createApp(App).use(vuetify).use(Particles).use(router).mount('#app');
