import axios from 'axios'

const hotelAPI = axios.create({
    baseURL: 'https://proyecto3-backend.onrender.com'
})

hotelAPI.interceptors.request.use((config) => {
    config.headers = {
        "TokenJWT": localStorage.getItem('TokenJWT')
    }
    return config
})

export default hotelAPI