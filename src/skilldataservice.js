import axios from 'axios';


let dataservice={};
let val="http://localhost:5500/";
dataservice.getDatas=function(category){
    return axios.get(val+category);
}



export default dataservice ;