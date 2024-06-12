import axios from 'axios'

const hotelAPI = axios.create({
    baseURL: 'http://localhost:9099'
})

hotelAPI.interceptors.request.use((config) => {
    config.headers = {
        "TokenJWT": localStorage.getItem('TokenJWT')
    }
    return config
})

export default hotelAPI