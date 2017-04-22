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

function getAuthorizedQuery(query, auth, params){
    return axios.get(query, {
        headers:
            {'Authorization': 'Basic ' + auth},
        params: params
        });
}
function postQuery(query, data){
    return axios.post(query, data);
}

export {getCategoriesNames, getQuery, postQuery, getAuthorizedQuery}
