import { VueElement } from 'vue'
import vpay from './pay'

const myPlugin = {
    install(vue, options){
        Vue.component('vpay', vpay)
    }
}

export default myPlugin