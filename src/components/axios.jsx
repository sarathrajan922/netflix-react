import axios from  'axios'
import { URLS } from './constants'



const instance = axios.create({
    baseURL : URLS.API_BASE_URL,
})


export default instance;