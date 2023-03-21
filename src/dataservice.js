import axios from 'axios';
let dataServiceObj={};
let url="http://localhost:5500/content/";
dataServiceObj.getCategory=function(category){
    return axios.get(url+category);
}

export default dataServiceObj;