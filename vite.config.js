import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({
            styles: {
                configFile: 'resources/js/src/styles/variables/_vuetify.scss',
            },
        }),
        AutoImport({
            eslintrc: {
              enabled: true,
              filepath: './.eslintrc-auto-import.json',
            },
            imports: ['vue', 'vue-router'],
            vueTemplate: true,
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@/': __dirname + '/resources/js/src/',
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@core':  __dirname + '/resources/js/src/@core',
            '@layouts':  __dirname + '/resources/js/src/@layouts',
            '@images':  __dirname + '/resources/js/src/assets/images/',
            '@styles': __dirname + '/resources/js/src/styles',
            '@configured-variables': __dirname + '/resources/js/src/styles/variables/_template.scss', 
            '@axios':__dirname + '/resources/js/src/plugins/axios',
        }
    },
    
    base: '/',
});
