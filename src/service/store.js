import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_ROLE = 'SET_ROLE'

export default new Vuex.Store({
    state:{
        ip: "null",
        user: {
            role: null,
            name: null
        }
    },
    mutations:{
        [SET_ROLE](state,role){
            state.user.role = role;
        }
    }
});
