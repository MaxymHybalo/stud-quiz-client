import axios from 'axios'

function getCategoriesNames() {
    console.log('queries function call');
    return axios.get('/category/names')

}

function getQuery(query, params){
    console.log("getQuery: " + query);
    if (params) {
        return axios.get(query, {params:params});
    }
    return axios.get(query);
}

export {getCategoriesNames, getQuery}
