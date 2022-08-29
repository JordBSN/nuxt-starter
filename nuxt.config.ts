import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@fortawesome/fontawesome-svg-core/styles.css', 'sweetalert2/dist/sweetalert2.min.css'],
    buildModules: [
        [
            '@nuxt-modules/compression',
            {
                algorithm: 'brotliCompress',
            },
        ],
        ['@pinia/nuxt', {disableVuex: true}],
    ],
    build: {
        transpile: [
            '@heroicons/vue',
            'date-fns',
            'vue-api-query',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-light-svg-icons',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons',
        ],
    },
})
