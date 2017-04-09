import axios from 'axios'

function getCategoriesNames() {
    console.log('queries function call');
    return axios.get('/category/names')

}

export {getCategoriesNames}
