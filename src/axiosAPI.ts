import axios from 'axios';


const axiosAPI = axios.create({
  baseURL: 'https://server-1-adbbe-default-rtdb.europe-west1.firebasedatabase.app/',
})

export default axiosAPI
