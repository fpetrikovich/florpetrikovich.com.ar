import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    const getGDPR = localStorage.getItem('GDPR:accepted');
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-SK6HET6D8Y'
        },
        appName: 'florpetrikovich.com.ar',
        enabled: getGDPR === 'true',
        pageTrackerScreenviewEnabled: true
    }, nuxtApp.vueApp.router);
});