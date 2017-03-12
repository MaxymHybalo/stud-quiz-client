import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const SET_ROLE = 'SET_ROLE';

const SET_ACCOUNT = 'SET_ACCOUNT';

const SET_PERSONAL = 'SET_PERSONAL';

const _SUBMITED = 'SUBMITED';

export default new Vuex.Store({
    state:{
        ip: "null",
        user: {}
    },
    mutations:{
        [SET_ROLE](state,role){
            state.user.role = role;
        },
        [SET_ACCOUNT](state, values){
            state.user.login = values[0];
            state.user.email = values[1];
            state.user.password = values[2];
        },
        [SET_PERSONAL](state, values){
            state.user.first = values[0];
            state.user.last = values[1];
            state.user.middle = values[2];
            state.user.sex = values[3];
            state.user.phone = values[4];
        },
        [_SUBMITED](state, message){
            state.message = message;
        }

    },
    getters:{
        getUser: state => {
            return JSON.stringify(state.user);
        }
    }

});
