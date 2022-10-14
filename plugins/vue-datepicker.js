import Datepicker from '@vuepic/vue-datepicker';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('date-picker', Datepicker)
})