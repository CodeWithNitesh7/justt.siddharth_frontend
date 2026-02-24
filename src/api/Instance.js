import axios from 'axios'

const Api = axios.create({
    baseURL:"http://localhost:8081",
    withCredentials:true
});
export default Api;