import axios from 'axios'

const Api = axios.create({
    baseURL:"https://justt-siddharth-backend.onrender.com", 
    withCredentials:true
});
export default Api;
