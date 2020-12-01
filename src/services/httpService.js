import axios from 'axios'

const httpService = axios.create({
    baseURL: 'http://localhost:9191'
})

export default httpService