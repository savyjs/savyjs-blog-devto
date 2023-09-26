import {defineNuxtConfig} from "nuxt/config";
import {config} from 'dotenv'

config();
export default defineNuxtConfig({
    extends: [
        'digimarket-nuxt-layer-blog'
    ]
})