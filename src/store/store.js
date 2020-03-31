import Vue from 'vue'
import Vuex from 'vuex'

import linkGenerator from './modules/linkGenerator.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        linkGenerator
    }
});