import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')

const settings = {
    apiKey: '', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
}

import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin, settings)